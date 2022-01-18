import smbus
import time
class ADS1115:
    BUS = None
    ADS1115_ADDR = None
    def __init__(self, BUS=1, ADS1115_ADDR=0x48):
        self.ADS1115_ADDR = ADS1115_ADDR
        self.BUS = smbus.SMBus(BUS)

    def analogRead(self, mux=0, pga=4.096, dr=860):
        if mux == 0:
            mux2 = "100"
        elif mux == 1:
            mux2 = "101"
        elif mux == 2:
            mux2 = "110"
        elif mux == 3:
            mux2 = "111"
        else:
            return False

        if pga == 4.096:
            pga2 = "001"
        elif pga == 2.048:
            pga2 = "010"
        elif pga == 1.024:
            pga2 = "011"
        elif pga == 0.512:
            pga2 = "100"
        elif pga == 0.256:
            pga2 = "101"
        else:
            return False

        if dr == 8:
            dr2 = "000"
        elif dr == 16:
            dr2 = "001"
        elif dr == 32:
            dr2 = "010"
        elif dr == 64:
            dr2 = "011"
        elif dr == 128:
            dr2 = "100"
        elif dr == 250:
            dr2 = "101"
        elif dr == 475:
            dr2 = "110"
        elif dr == 860:
            dr2 = "111"
        else:
            return False
        
        config=int("0"+mux2+pga2+"0"+dr2+"10000",2)
        self.BUS.write_i2c_block_data(self.ADS1115_ADDR,0x01,[config>>8,config&0xFF])
        time.sleep(0.005)
        result = self.BUS.read_i2c_block_data(self.ADS1115_ADDR,0x00,2)
        result = (result[0]<<8)|result[1]
        if result > 0x7FFF:
            result = 0x0000
        return float(result)/32767*pga

def ADS1115_analogRead(BUS=1, ADS1115_ADDR=0x48, mux=0):
    adc=ADS1115(BUS,ADS1115_ADDR)
    return adc.analogRead(mux)

if __name__ == '__main__':
    adc=ADS1115(1,0x48)
    while True:
        print("A0:"+str(adc.analogRead(0))+" V")
        print("A1:"+str(adc.analogRead(1))+" V")
        print("A2:"+str(adc.analogRead(2))+" V")
        print("A3:"+str(adc.analogRead(3))+" V")
        print("")
        time.sleep(1)