import time
import RPi.GPIO as GPIO

class Stepper:
    step_number = 0
    speed = 0
    direction = 0
    last_step_time = 0
    number_of_steps = None

    pin_count = 0
    step_delay = 0

    direction = None

    motor_pin_1 = None
    motor_pin_2 = None
    motor_pin_3 = None
    motor_pin_4 = None

    def __init__(self,number_of_steps,motor_pin_1,motor_pin_2,motor_pin_3,motor_pin_4):
        self.step_number = 0
        self.speed = 0
        self.direction = 0
        self.last_step_time = time.time() * 1000
        self.number_of_steps = number_of_steps

        self.motor_pin_1 = motor_pin_1
        self.motor_pin_2 = motor_pin_2
        self.motor_pin_3 = motor_pin_3
        self.motor_pin_4 = motor_pin_4

        GPIO.setup(self.motor_pin_1,GPIO.OUT)
        GPIO.setup(self.motor_pin_2,GPIO.OUT)
        GPIO.setup(self.motor_pin_3,GPIO.OUT)
        GPIO.setup(self.motor_pin_4,GPIO.OUT)

    def setSpeed(self,whatSpeed):
        self.step_delay=60 * 1000 / self.number_of_steps / whatSpeed

    def step(self,steps_to_move):
        steps_left = abs(steps_to_move)
        if steps_to_move > 0:
            self.direction = 1
        if steps_to_move < 0:
            self.direction = 0
        while steps_left > 0:
            if time.time() * 1000 - self.last_step_time >= self.step_delay:
                self.last_step_time = time.time() * 1000
                if self.direction == 1:
                    self.step_number = self.step_number + 1
                    if self.step_number == self.number_of_steps:
                        self.step_number = 0
                else:
                    if self.step_number == 0:
                        self.step_number = self.number_of_steps
                    self.step_number = self.step_number - 1
                steps_left = steps_left -1
                self.stepMotor(self.step_number % 4)
    
    def stepMotor(self,thisStep):
        if thisStep == 0:
            GPIO.output(self.motor_pin_1,GPIO.HIGH)
            GPIO.output(self.motor_pin_2,GPIO.LOW)
            GPIO.output(self.motor_pin_3,GPIO.HIGH)
            GPIO.output(self.motor_pin_4,GPIO.LOW)
        elif thisStep == 1:
            GPIO.output(self.motor_pin_1,GPIO.LOW)
            GPIO.output(self.motor_pin_2,GPIO.HIGH)
            GPIO.output(self.motor_pin_3,GPIO.HIGH)
            GPIO.output(self.motor_pin_4,GPIO.LOW)
        elif thisStep == 2:
            GPIO.output(self.motor_pin_1,GPIO.LOW)
            GPIO.output(self.motor_pin_2,GPIO.HIGH)
            GPIO.output(self.motor_pin_3,GPIO.LOW)
            GPIO.output(self.motor_pin_4,GPIO.HIGH)
        elif thisStep == 3:
            GPIO.output(self.motor_pin_1,GPIO.HIGH)
            GPIO.output(self.motor_pin_2,GPIO.LOW)
            GPIO.output(self.motor_pin_3,GPIO.LOW)
            GPIO.output(self.motor_pin_4,GPIO.HIGH)
