import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
from stepper import Stepper

stepper=Stepper(100,31,33,35,37)
stepper.setSpeed(50)
stepper.step(1000)
