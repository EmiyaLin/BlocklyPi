import time
import smbus

class LCD1602:
    BUS = None
    LCD_ADDR = None
    BLEN = 1 #turn on/off background light

    def __init__(self, BUS, LCD_ADDR):
        self.BUS = smbus.SMBus(BUS)
        self.LCD_ADDR = LCD_ADDR

        self.send_command(0x33) # Must initialize to 8-line mode at first
        time.sleep(0.005)
        self.send_command(0x32) # Then initialize to 4-line mode
        time.sleep(0.005)
        self.send_command(0x28) # 2 Lines & 5*7 dots
        time.sleep(0.005)
        self.send_command(0x0C) # Enable display without cursor
        time.sleep(0.005)
        self.send_command(0x01) # Clear Screen
        self.BUS.write_byte(self.LCD_ADDR ,0x08)

    def turn_light(self, key):
        self.BLEN = key
        if key ==1 :
            self.BUS.write_byte(self.LCD_ADDR ,0x08)
        else:
            self.BUS.write_byte(self.LCD_ADDR ,0x00)
    
    def write_word(self, addr, data):
        temp = data
        if self.BLEN == 1:
            temp |= 0x08
        else:
            temp &= 0xF7
        self.BUS.write_byte(addr ,temp)
    
    def send_command(self, comm):
        # Send bit7-4 firstly
        buf = comm & 0xF0
        buf |= 0x04               # RS = 0, RW = 0, EN = 1
        self.write_word(self.LCD_ADDR ,buf)
        time.sleep(0.002)
        buf &= 0xFB               # Make EN = 0
        self.write_word(self.LCD_ADDR ,buf)

        # Send bit3-0 secondly
        buf = (comm & 0x0F) << 4
        buf |= 0x04               # RS = 0, RW = 0, EN = 1
        self.write_word(self.LCD_ADDR ,buf)
        time.sleep(0.002)
        buf &= 0xFB               # Make EN = 0
        self.write_word(self.LCD_ADDR ,buf)
    
    def send_data(self, data):
        # Send bit7-4 firstly
        buf = data & 0xF0
        buf |= 0x05               # RS = 1, RW = 0, EN = 1
        self.write_word(self.LCD_ADDR ,buf)
        time.sleep(0.002)
        buf &= 0xFB               # Make EN = 0
        self.write_word(self.LCD_ADDR ,buf)

        # Send bit3-0 secondly
        buf = (data & 0x0F) << 4
        buf |= 0x05               # RS = 1, RW = 0, EN = 1
        self.write_word(self.LCD_ADDR ,buf)
        time.sleep(0.002)
        buf &= 0xFB               # Make EN = 0
        self.write_word(self.LCD_ADDR ,buf)
    
    def clear_lcd(self):
        self.send_command(0x01) # Clear Screen
    
    def print_lcd(self, x, y, str):
        if x < 0:
            x = 0
        if x > 15:
            x = 15
        if y <0:
            y = 0
        if y > 1:
            y = 1
    
        # Move cursor
        addr = 0x80 + 0x40 * y + x
        self.send_command(addr)

        for chr in str:
            self.send_data(ord(chr))
 
if __name__ == '__main__':
    mylcd=LCD1602(1,0x27)
    mylcd.print_lcd(0, 0, 'Hello, world!')