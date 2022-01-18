from ads1115 import ADS1115
adc=ADS1115(1,0x48)
while True:
    print("A0:"+str(adc.analogRead(0))+" V")
    print("A1:"+str(adc.analogRead(1))+" V")
    print("A2:"+str(adc.analogRead(2))+" V")
    print("A3:"+str(adc.analogRead(3))+" V")
    print("")
    time.sleep(1)