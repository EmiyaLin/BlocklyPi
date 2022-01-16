from lcd1602 import LCD1602

mylcd=LCD1602(1,0x27)
mylcd.clear_lcd()
mylcd.print_lcd(0,0,'hello world')
mylcd.print_lcd(0,1,'This is a test')