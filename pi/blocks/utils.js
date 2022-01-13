Blockly.Blocks.utils_now={
    init:function(){
        this.setColour(75);
        this.appendDummyInput()
            .appendField("当前")
            .appendField(new Blockly.FieldDropdown([["年","year"],["月","month"],["日","day"],["时","hour"],["分","minute"],["秒","second"]]),"MODE");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.utils_time={
    init:function(){
        this.setColour(75);
        this.appendDummyInput()
            .appendField("当前系统时间戳");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.utils_break={
    init:function(){
        this.setColour(75);
		this.appendDummyInput()
			.appendField("换行符");
		this.setOutput(true,"String");
    }
};

Blockly.Blocks.utils_int={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为整数");
		this.setOutput(true,"Number");
    }
};

Blockly.Blocks.utils_long={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为长整数");
		this.setOutput(true,"Number");
    }
};

Blockly.Blocks.utils_float={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为浮点数");
		this.setOutput(true,"Number");
    }
};

Blockly.Blocks.utils_str={
    init:function(){
        this.setColour(75);
        this.appendValueInput("INPUT")
			.appendField("转换为文本");
		this.setOutput(true,"String");
    }
};