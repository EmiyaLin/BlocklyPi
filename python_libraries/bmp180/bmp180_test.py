from bmp180 import BMP180
bmp180=BMP180(1,0x77)
print("Temperature:"+str(bmp180.read_temperature()))
print("Pressure:"+str(bmp180.read_pressure())+" Pa")
print("")