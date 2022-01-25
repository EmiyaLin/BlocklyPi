from time import time, sleep, localtime
import RPi.GPIO as GPIO

TM1637_CMD1 = 0x40
TM1637_CMD2 = 0xc0
TM1637_CMD3 = 0x80
TM1637_DSP_ON = 0x08
TM1637_DELAY = 0.00000001
TM1637_MSB = 0x80

_SEGMENTS = bytearray(b'\x3F\x06\x5B\x4F\x66\x6D\x7D\x07\x7F\x6F\x77\x7C\x39\x5E\x79\x71\x3D\x76\x06\x1E\x76\x38\x55\x54\x3F\x73\x67\x50\x6D\x78\x3E\x1C\x2A\x76\x6E\x5B\x00\x40\x63')

class TM1637(object):
    def __init__(self, clk, dio, brightness=7):
        self.clk = clk
        self.dio = dio

        if not 0 <= brightness <= 7:
            raise ValueError("Brightness out of range")
        self._brightness = brightness

        GPIO.setup(self.clk,GPIO.OUT)
        GPIO.setup(self.dio,GPIO.OUT)
        GPIO.output(self.clk,GPIO.LOW)
        GPIO.output(self.dio,GPIO.LOW)

    def _start(self):
        GPIO.output(self.clk,GPIO.HIGH)
        GPIO.output(self.dio,GPIO.HIGH)
        GPIO.output(self.dio,GPIO.LOW)
        GPIO.output(self.clk,GPIO.LOW)

    def _stop(self):
        GPIO.output(self.clk,GPIO.LOW)
        GPIO.output(self.dio,GPIO.LOW)
        GPIO.output(self.clk,GPIO.HIGH)
        GPIO.output(self.dio,GPIO.HIGH)

    def _write_data_cmd(self):
        self._start()
        self._write_byte(TM1637_CMD1)
        self._stop()

    def _write_dsp_ctrl(self):
        self._start()
        self._write_byte(TM1637_CMD3 | TM1637_DSP_ON | self._brightness)
        self._stop()

    def _write_byte(self, b):
        for i in range(8):
            GPIO.output(self.clk,GPIO.LOW)
            GPIO.output(self.dio,GPIO.HIGH if b & 1 else GPIO.LOW)
            b >>= 1
            GPIO.output(self.clk,GPIO.HIGH)

        GPIO.output(self.clk,GPIO.LOW)
        GPIO.output(self.dio,GPIO.HIGH)
        GPIO.output(self.clk,GPIO.HIGH)
        GPIO.setup(self.dio,GPIO.IN)

        while (GPIO.input(self.dio)):
            sleep(TM1637_DELAY)
            if (GPIO.input(self.dio)):
                GPIO.setup(self.dio,GPIO.OUT)
                GPIO.output(self.dio,GPIO.LOW)
                GPIO.setup(self.dio,GPIO.IN)
        GPIO.setup(self.dio,GPIO.OUT)

    def brightness(self, val=None):
        if val is None:
            return self._brightness
        if not 0 <= val <= 7:
            raise ValueError("Brightness out of range")

        self._brightness = val
        self._write_data_cmd()
        self._write_dsp_ctrl()

    def write(self, segments, pos=0):
        if not 0 <= pos <= 5:
            raise ValueError("Position out of range")
        self._write_data_cmd()
        self._start()
        self._write_byte(TM1637_CMD2 | pos)
        for seg in segments:
            self._write_byte(seg)
        self._stop()
        self._write_dsp_ctrl()

    def encode_string(self, string):
        segments = bytearray(len(string))
        for i in range(len(string)):
            segments[i] = self.encode_char(string[i])
        return segments

    def encode_char(self, char):
        o = ord(char)
        if o == 32:
            return _SEGMENTS[36] # space
        if o == 42:
            return _SEGMENTS[38] # star/degrees
        if o == 45:
            return _SEGMENTS[37] # dash
        if o >= 65 and o <= 90:
            return _SEGMENTS[o-55] # uppercase A-Z
        if o >= 97 and o <= 122:
            return _SEGMENTS[o-87] # lowercase a-z
        if o >= 48 and o <= 57:
            return _SEGMENTS[o-48] # 0-9
        raise ValueError("Character out of range: {:d} '{:s}'".format(o, chr(o)))

    def hex(self, val):
        string = '{:04x}'.format(val & 0xffff)
        self.write(self.encode_string(string))

    def number(self, num):
        num = int(round(num))
        num = max(-999, min(num, 9999))
        string = '{0: >4d}'.format(num)
        self.write(self.encode_string(string))

    def numbers(self, num1, num2, colon=True):
        num1 = int(round(num1))
        num2 = int(round(num2))
        num1 = max(-9, min(num1, 99))
        num2 = max(-9, min(num2, 99))
        segments = self.encode_string('{0:0>2d}{1:0>2d}'.format(num1, num2))
        if colon:
            segments[1] |= 0x80
        self.write(segments)

    def temperature(self, num):
        num = int(round(num))
        if num < -9:
            self.show('lo')
        elif num > 99:
            self.show('hi')
        else:
            string = '{0: >2d}'.format(num)
            self.write(self.encode_string(string))
        self.write([_SEGMENTS[38], _SEGMENTS[12]], 2)

    def show(self, string, colon=False):
        segments = self.encode_string(string)
        if len(segments) > 1 and colon:
            segments[1] |= 128
        self.write(segments[:4])