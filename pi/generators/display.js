Blockly.Python.display_lcd1602_init=function(){
    Blockly.Python.definitions_['from lcd1602 import LCD1602'] = "from lcd1602 import LCD1602";
    var lcd_obj=OBJ_FLAG+this.getFieldValue('LCD_OBJ');
    var bus=Blockly.Python.valueToCode(this,'BUS',Blockly.Python.ORDER_ATOMIC);
    var lcd_addr=Blockly.Python.valueToCode(this,'LCD_ADDR',Blockly.Python.ORDER_ATOMIC);
	return lcd_obj+"=LCD1602("+bus+","+lcd_addr+")\n";
};

Blockly.Python.display_lcd1602_print=function(){
    Blockly.Python.definitions_['from lcd1602 import LCD1602'] = "from lcd1602 import LCD1602";
    var lcd_obj=OBJ_FLAG+this.getFieldValue('LCD_OBJ');
    var x=Blockly.Python.valueToCode(this,'x',Blockly.Python.ORDER_ATOMIC);
    var y=Blockly.Python.valueToCode(this,'y',Blockly.Python.ORDER_ATOMIC);
    var str=Blockly.Python.valueToCode(this,'STR',Blockly.Python.ORDER_ATOMIC);
	return lcd_obj+".print_lcd("+y+"-1,"+x+"-1,"+str+")\n";
};

Blockly.Python.display_lcd1602_printline=function(){
    Blockly.Python.definitions_['from lcd1602 import LCD1602'] = "from lcd1602 import LCD1602";
    var lcd_obj=OBJ_FLAG+this.getFieldValue('LCD_OBJ');
    var str1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
    var str2=Blockly.Python.valueToCode(this,'STR2',Blockly.Python.ORDER_ATOMIC);
	return lcd_obj+".print_lcd(0,0,"+str1+")\n"+lcd_obj+".print_lcd(0,1,"+str2+")\n";
};

Blockly.Python.display_lcd1602_clear=function(){
    Blockly.Python.definitions_['from lcd1602 import LCD1602'] = "from lcd1602 import LCD1602";
    var lcd_obj=OBJ_FLAG+this.getFieldValue('LCD_OBJ');
	return lcd_obj+".clear_lcd()\n";
};

Blockly.Python.display_oled_init=function(){
    Blockly.Python.definitions_['from ssd1306 import SSD1306'] = "from ssd1306 import SSD1306";
    var oled_obj=OBJ_FLAG+this.getFieldValue('OLED_OBJ');
    var bus=Blockly.Python.valueToCode(this,'BUS',Blockly.Python.ORDER_ATOMIC);
    var oled_addr=Blockly.Python.valueToCode(this,'OLED_ADDR',Blockly.Python.ORDER_ATOMIC);
	return oled_obj+"=SSD1306("+bus+","+oled_addr+")\n";
};

Blockly.Python.display_oled_print=function(){
    Blockly.Python.definitions_['from ssd1306 import SSD1306'] = "from ssd1306 import SSD1306";
    var oled_obj=OBJ_FLAG+this.getFieldValue('OLED_OBJ');
    var x=Blockly.Python.valueToCode(this,'x',Blockly.Python.ORDER_ATOMIC);
    var y=Blockly.Python.valueToCode(this,'y',Blockly.Python.ORDER_ATOMIC);
    var str=Blockly.Python.valueToCode(this,'STR',Blockly.Python.ORDER_ATOMIC);
	return oled_obj+".ShowString("+x+","+y+","+str+")\n";
};

Blockly.Python.display_oled_printline=function(){
    Blockly.Python.definitions_['from ssd1306 import SSD1306'] = "from ssd1306 import SSD1306";
    var oled_obj=OBJ_FLAG+this.getFieldValue('OLED_OBJ');
    var str1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
    var str2=Blockly.Python.valueToCode(this,'STR2',Blockly.Python.ORDER_ATOMIC);
    var str3=Blockly.Python.valueToCode(this,'STR3',Blockly.Python.ORDER_ATOMIC);
    var str4=Blockly.Python.valueToCode(this,'STR4',Blockly.Python.ORDER_ATOMIC);
	return oled_obj+".ShowString(0,0,"+str1+")\n"+oled_obj+".ShowString(0,2,"+str2+")\n"+oled_obj+".ShowString(0,4,"+str3+")\n"+oled_obj+".ShowString(0,6,"+str4+")\n";
};

Blockly.Python.display_oled_clear=function(){
    Blockly.Python.definitions_['from ssd1306 import SSD1306'] = "from ssd1306 import SSD1306";
    var oled_obj=OBJ_FLAG+this.getFieldValue('OLED_OBJ');
	return oled_obj+".Clear()\n";
};

Blockly.Python.display_tm1637_init=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from tm1637 import TM1637'] = "from tm1637 import TM1637";
    var led_obj=OBJ_FLAG+this.getFieldValue('LED_OBJ');
    var clk=Blockly.Python.valueToCode(this,'CLK',Blockly.Python.ORDER_ATOMIC);
    var dio=Blockly.Python.valueToCode(this,'DIO',Blockly.Python.ORDER_ATOMIC);
	return led_obj+"=TM1637("+clk+","+dio+")\n";
};

Blockly.Python.display_tm1637_number=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from tm1637 import TM1637'] = "from tm1637 import TM1637";
    var led_obj=OBJ_FLAG+this.getFieldValue('LED_OBJ');
    var num=Blockly.Python.valueToCode(this,'NUM',Blockly.Python.ORDER_ATOMIC);
	return led_obj+".number("+num+")\n";
};

Blockly.Python.display_tm1637_print=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from tm1637 import TM1637'] = "from tm1637 import TM1637";
    var led_obj=OBJ_FLAG+this.getFieldValue('LED_OBJ');
    var mode=this.getFieldValue('MODE')=="TRUE"?"True":"False";
    var str=Blockly.Python.valueToCode(this,'STR',Blockly.Python.ORDER_ATOMIC);
	return led_obj+".show("+str+","+mode+")\n";
};

Blockly.Python.display_tm1637_ratio=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from tm1637 import TM1637'] = "from tm1637 import TM1637";
    var led_obj=OBJ_FLAG+this.getFieldValue('LED_OBJ');
    var num1=Blockly.Python.valueToCode(this,'NUM1',Blockly.Python.ORDER_ATOMIC);
    var num2=Blockly.Python.valueToCode(this,'NUM2',Blockly.Python.ORDER_ATOMIC);
	return led_obj+".numbers("+num1+","+num2+")\n";
};

Blockly.Python.display_tm1637_temperature=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from tm1637 import TM1637'] = "from tm1637 import TM1637";
    var led_obj=OBJ_FLAG+this.getFieldValue('LED_OBJ');
    var temp=Blockly.Python.valueToCode(this,'TEMP',Blockly.Python.ORDER_ATOMIC);
	return led_obj+".temperature("+temp+")\n";
};

Blockly.Python.display_tm1637_clear=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from tm1637 import TM1637'] = "from tm1637 import TM1637";
    var led_obj=OBJ_FLAG+this.getFieldValue('LED_OBJ');
	return led_obj+".show('    ',False)\n";
};