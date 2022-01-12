Blockly.Blocks.helper_break={
    init:function(){
        this.setColour(75);
		this.appendDummyInput()
			.appendField("换行符");
		this.setOutput(true,"String");
    }
};

Blockly.Blocks.helper_int={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为整数");
		this.setOutput(true,"Number");
    }
};

Blockly.Blocks.helper_long={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为长整数");
		this.setOutput(true,"Number");
    }
};

Blockly.Blocks.helper_float={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为浮点数");
		this.setOutput(true,"Number");
    }
};

Blockly.Blocks.helper_str={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为文本");
		this.setOutput(true,"String");
    }
};