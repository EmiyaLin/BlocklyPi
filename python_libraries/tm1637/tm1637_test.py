import RPi.GPIO as GPIO
from tm1637 import TM1637
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

clk = 7
dio = 11

myled = TM1637(clk,dio)
myled.show("1234",True)