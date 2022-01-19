import time
import smbus

BMP180_ULTRALOWPOWER = 0
BMP180_STANDARD = 1
BMP180_HIGHRES = 2
BMP180_ULTRAHIGHRES = 3

class BMP180():
    def __init__(self, BUS=1, BMP180_ADDR=0x77, mode=BMP180_STANDARD):
        self._mode = mode
        self._address = BMP180_ADDR
        self._bus = smbus.SMBus(BUS)
        self._load_calibration()

    def _read_byte(self,cmd):
        return self._bus.read_byte_data(self._address,cmd)

    def _read_u16(self,cmd):
        MSB = self._bus.read_byte_data(self._address,cmd)
        LSB = self._bus.read_byte_data(self._address,cmd+1)
        return (MSB << 8) + LSB

    def _read_s16(self,cmd):
        result = self._read_u16(cmd)
        if result > 32767:result -= 65536
        return result

    def _write_byte(self,cmd,val):
        self._bus.write_byte_data(self._address,cmd,val)

    def _load_calibration(self):
        self.cal_AC1 = self._read_s16(0xAA)
        self.cal_AC2 = self._read_s16(0xAC)
        self.cal_AC3 = self._read_s16(0xAE)
        self.cal_AC4 = self._read_u16(0xB0)
        self.cal_AC5 = self._read_u16(0xB2)
        self.cal_AC6 = self._read_u16(0xB4)
        self.cal_B1 = self._read_s16(0xB6)
        self.cal_B2 = self._read_s16(0xB8)
        self.cal_MB = self._read_s16(0xBA)
        self.cal_MC = self._read_s16(0xBC)
        self.cal_MD = self._read_s16(0xBE)

    def read_raw_temp(self):
        self._write_byte(0xF4, 0x2E)
        time.sleep(0.005)
        MSB = self._read_byte(0xF6)
        LSB = self._read_byte(0xF6+1)
        raw = (MSB << 8) + LSB
        return raw

    def read_raw_pressure(self):
        self._write_byte(0xF4, 0x34 + (self._mode << 6))
        if self._mode == BMP180_ULTRALOWPOWER:
            time.sleep(0.005)
        elif self._mode == BMP180_HIGHRES:
            time.sleep(0.014)
        elif self._mode == BMP180_ULTRAHIGHRES:
            time.sleep(0.026)
        else:
            time.sleep(0.008)
        MSB = self._read_byte(0xF6)
        LSB = self._read_byte(0xF6+1)
        XLSB = self._read_byte(0xF6+2)
        raw = ((MSB << 16) + (LSB << 8) + XLSB) >> (8 - self._mode)
        return raw

    def read_temperature(self):
        UT = self.read_raw_temp()
        X1 = ((UT - self.cal_AC6) * self.cal_AC5) >> 15
        X2 = (self.cal_MC << 11) / (X1 + self.cal_MD)
        B5 = X1 + X2
        temp = ((B5 + 8) >> 4) / 10.0
        return temp

    def read_pressure(self):
        UT = self.read_raw_temp()
        UP = self.read_raw_pressure()
        X1 = ((UT - self.cal_AC6) * self.cal_AC5) >> 15
        X2 = (self.cal_MC << 11) / (X1 + self.cal_MD)
        B5 = X1 + X2

        B6 = B5 - 4000
        X1 = (self.cal_B2 * (B6 * B6) >> 12) >> 11
        X2 = (self.cal_AC2 * B6) >> 11
        X3 = X1 + X2
        B3 = (((self.cal_AC1 * 4 + X3) << self._mode) + 2) / 4
        X1 = (self.cal_AC3 * B6) >> 13
        X2 = (self.cal_B1 * ((B6 * B6) >> 12)) >> 16
        X3 = ((X1 + X2) + 2) >> 2
        B4 = (self.cal_AC4 * (X3 + 32768)) >> 15
        B7 = (UP - B3) * (50000 >> self._mode)
        if B7 < 0x80000000:
            p = (B7 * 2) / B4
        else:
            p = (B7 / B4) * 2
        X1 = (p >> 8) * (p >> 8)
        X1 = (X1 * 3038) >> 16
        X2 = (-7357 * p) >> 16
        p = p + ((X1 + X2 + 3791) >> 4)
        return p

    def read_altitude(self, sealevel_pa=101325.0):
        pressure = float(self.read_pressure())
        altitude = 44330.0 * (1.0 - pow(pressure / sealevel_pa, (1.0/5.255)))
        return altitude

    def read_sealevel_pressure(self, altitude_m=0.0):
        pressure = float(self.read_pressure())
        p0 = pressure / pow(1.0 - altitude_m/44330.0, 5.255)
        return p0

def getTemperature(BUS=1, BMP180_ADDR=0x77):
    bmp180=BMP180(BUS,BMP180_ADDR)
    return float(bmp180.read_temperature())

def getPressure(BUS=1, BMP180_ADDR=0x77):
    bmp180=BMP180(BUS,BMP180_ADDR)
    return float(bmp180.read_pressure())

if __name__ == '__main__':
    bmp180=BMP180(1,0x77)
    while True:
        print("Temperature:"+str(bmp180.read_temperature()))
        print("Pressure:"+str(bmp180.read_pressure())+" Pa")
        print("")
        time.sleep(1)