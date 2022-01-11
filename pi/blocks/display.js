Blockly.Blocks.display_init_lcd1602={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("初始化 显示器LCD1602");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_print_lcd1602={
    init:function(){
        this.setColour(180);
        this.appendValueInput("x",Number)
			.appendField("显示器LCD1602 在第")
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

Blockly.Blocks.display_printline_lcd1602={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器LCD1602");
        this.appendValueInput("STR1",String)
			.appendField("打印在第1行")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("STR2",String)
			.appendField("打印在第2行")
			.setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.display_clear_lcd1602={
    init:function(){
        this.setColour(180);
        this.appendDummyInput("")
            .appendField("显示器LCD1602 清屏");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};