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