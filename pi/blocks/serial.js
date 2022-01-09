Blockly.Blocks.serial_init_serial={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
	    	.appendField("初始化 serial");
	    this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};

Blockly.Blocks.serial_init={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("初始化");
        this.appendValueInput("DEV_FILE")
            .appendField("设备")
            .setCheck("String");
        this.appendValueInput("BAUD")
            .appendField("波特率")
            .setCheck("Number");
        this.appendValueInput("TIMEOUT")
            .appendField("超时")
            .setCheck("Number");
        this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};

Blockly.Blocks.serial_open={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("打开端口");
        this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};

Blockly.Blocks.serial_isopen={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("是否已经被打开？");
        this.setOutput(true,"Boolean");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.serial_close={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("关闭端口");
        this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};

Blockly.Blocks.serial_inwaiting={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("缓存区中的字节数");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.serial_flushinput={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("清空缓冲区");
        this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};

Blockly.Blocks.serial_read={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("读取数据");
        this.appendValueInput("SIZE",Number)
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("字节");
        this.setOutput(true,"String");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.serial_readline={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
            .appendField("读取一行数据");
        this.setOutput(true,"String");
    }
};

Blockly.Blocks.serial_write={
    init:function(){
	    this.setColour(65);
	    this.appendDummyInput()
            .appendField("串口")
            .appendField(new Blockly.FieldTextInput('ser'),'SER_OBJ')
        this.appendValueInput("DATA")
            .appendField("写入数据")
            .setCheck("String");
        this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};