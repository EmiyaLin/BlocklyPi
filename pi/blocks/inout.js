Blockly.Blocks.inout_pins={
	init:function(){
		this.setColour(20);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(profile.default.digital),"PIN");
		this.setOutput(true,"Number");
	}
};

Blockly.Blocks.inout_init_gpio={
	init:function(){
		this.setColour(20);
		this.appendDummyInput()
			.appendField("初始化 RPi.GPIO as GPIO");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
	}
};

Blockly.Blocks.inout_mode={
	init:function(){
		this.setColour(20); 
		this.appendValueInput("PIN",Number)
			.appendField("设置模式 管脚#")
			.setCheck("Number");
		this.appendDummyInput()
			.appendField("设为")
			.appendField(new Blockly.FieldDropdown([["输出","GPIO.OUT"],["输入","GPIO.IN"]]),"STAT");
    	this.setPreviousStatement(true);
    	this.setNextStatement(true);
    	this.setInputsInline(true);
	}
};

Blockly.Blocks.inout_highlow={
	init:function(){
		this.setColour(20);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([["HIGH","HIGH"],["LOW","LOW"]]),"BOOL");
		this.setOutput(true,"Boolean");
	}
};

Blockly.Blocks.inout_output = {
	init:function(){
		this.setColour(20);
    	this.appendValueInput("PIN",Number)
			.appendField("数字输出 管脚#")
			.setCheck("Number");
		this.appendValueInput("STAT",Number)
    		.appendField("设为")
			.setCheck("Boolean");
    	this.setPreviousStatement(true);
    	this.setNextStatement(true);
    	this.setInputsInline(true);
  	}
};

Blockly.Blocks.inout_input={
	init:function(){
		this.setColour(20);
		this.appendValueInput("PIN", Number)
			.appendField("数字输入 管脚#")
			.setCheck("Number");
		this.setOutput(true,"Boolean");
		this.setInputsInline(true);
	}
};