Blockly.Blocks.display_lcd1602_init={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器LCD1602")
            .appendField(new Blockly.FieldTextInput('mylcd'), 'LCD_OBJ')
            .appendField("初始化");
        this.appendValueInput("BUS",Number)
			.appendField("总线")
            .setCheck("Number");
        this.appendValueInput("LCD_ADDR",Number)
            .appendField("设备地址")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_lcd1602_print={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器LCD1602")
            .appendField(new Blockly.FieldTextInput('mylcd'), 'LCD_OBJ');
        this.appendValueInput("x",Number)
			.appendField("在第")
            .setCheck("Number");
        this.appendValueInput("y",Number)
			.appendField("行第")
            .setCheck("Number");
        this.appendValueInput("STR",String)
			.appendField("列打印")
			.setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_lcd1602_printline={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器LCD1602")
            .appendField(new Blockly.FieldTextInput('mylcd'), 'LCD_OBJ');
        this.appendValueInput("STR1",String)
			.appendField("打印在第1行")
            .setCheck("String");
        this.appendValueInput("STR2",String)
			.appendField("打印在第2行")
			.setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_lcd1602_clear={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器LCD1602")
            .appendField(new Blockly.FieldTextInput('mylcd'), 'LCD_OBJ')
            .appendField("清屏");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_oled_init={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器OLED")
            .appendField(new Blockly.FieldTextInput('myoled'), 'OLED_OBJ')
            .appendField("初始化");
        this.appendValueInput("BUS",Number)
			.appendField("总线")
            .setCheck("Number");
        this.appendValueInput("OLED_ADDR",Number)
            .appendField("设备地址")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_oled_print={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器OLED")
            .appendField(new Blockly.FieldTextInput('myoled'), 'OLED_OBJ');
        this.appendValueInput("x",Number)
			.appendField("在坐标 x:")
            .setCheck("Number");
        this.appendValueInput("y",Number)
			.appendField("y:")
            .setCheck("Number");
        this.appendValueInput("STR",String)
			.appendField("处打印")
			.setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_oled_printline={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器OLED")
            .appendField(new Blockly.FieldTextInput('myoled'), 'OLED_OBJ');
        this.appendValueInput("STR1",String)
			.appendField("打印在第1行")
            .setCheck("String");
        this.appendValueInput("STR2",String)
			.appendField("打印在第2行")
            .setCheck("String");
        this.appendValueInput("STR3",String)
			.appendField("打印在第3行")
            .setCheck("String");
        this.appendValueInput("STR4",String)
			.appendField("打印在第4行")
			.setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_oled_clear={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器OLED")
            .appendField(new Blockly.FieldTextInput('myoled'), 'OLED_OBJ')
            .appendField("清屏");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_tm1637_init={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("数码管TM1637")
            .appendField(new Blockly.FieldTextInput('myled'), 'LED_OBJ')
            .appendField("初始化");
        this.appendValueInput("CLK",Number)
			.appendField("CLK#")
            .setCheck("Number");
        this.appendValueInput("DIO",Number)
            .appendField("DIO#")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_tm1637_number={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("数码管TM1637")
            .appendField(new Blockly.FieldTextInput('myled'), 'LED_OBJ');
        this.appendValueInput("NUM",Number)
			.appendField("显示数字")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_tm1637_print={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("数码管TM1637")
            .appendField(new Blockly.FieldTextInput('myled'), 'LED_OBJ');
        this.appendDummyInput("")
            .appendField("显示分隔符\":\"")
            .appendField(new Blockly.FieldCheckbox(true),"MODE");
        this.appendValueInput("STR",String)
            .appendField("显示字符")
            .setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_tm1637_ratio={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("数码管TM1637")
            .appendField(new Blockly.FieldTextInput('myled'), 'LED_OBJ');
        this.appendValueInput("NUM1",Number)
            .appendField("显示比例")
            .setCheck("Number");
        this.appendValueInput("NUM2",Number)
            .appendField(":")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_tm1637_temperature={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("数码管TM1637")
            .appendField(new Blockly.FieldTextInput('myled'), 'LED_OBJ');
        this.appendValueInput("TEMP",Number)
            .appendField("显示温度")
            .setCheck("Number");
        this.appendDummyInput("")
            .appendField("℃");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.display_tm1637_clear={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("数码管TM1637")
            .appendField(new Blockly.FieldTextInput('myled'), 'LED_OBJ')
            .appendField("清屏");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};