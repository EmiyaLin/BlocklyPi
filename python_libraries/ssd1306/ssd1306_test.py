from ssd1306 import SSD1306
ssd1306=SSD1306(1,0x3C)
ssd1306.DisplayOn()
ssd1306.Clear()
ssd1306.ShowString(0,0,"hello world!")
ssd1306.ShowString(0,2,"OLED Display")