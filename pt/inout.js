//inout_digital_write
Blockly.c.inout_digital_write=function(){var a=this.getFieldValue("PIN"),b=this.getFieldValue("STAT");
	Blockly.c.setups_["setup_output_"+a]="pinMode("+a+", OUTPUT);";
	return"digitalWrite("+a+", "+b+");\n"
};
Blockly.Blocks.inout_digital_write={init:function(){
	this.setColour(230);
	this.appendDummyInput()
		.appendField("数字输出 管脚#")
		.appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN")
		.appendField("设为")
		.appendField(new Blockly.FieldDropdown([["HIGH","HIGH"],["LOW","LOW"]]),"STAT");
	this.setPreviousStatement(!0,null);
	this.setNextStatement(!0,null);
}};
//End.inout_digital_write

//inout_digital_read
Blockly.c.inout_digital_read=function(){
	var a=this.getFieldValue("PIN");
	Blockly.c.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";
	return["digitalRead("+a+")",Blockly.c.ORDER_ATOMIC]
};
Blockly.Blocks.inout_digital_read={
	init:function(){this.setColour(230);
	this.appendDummyInput()
		.appendField("数字输入 管脚#")
		.appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN");
	this.setOutput(!0,"Boolean");
	this.setTooltip("")
}};
//End.inout_digital_read

//inout_highlow
Blockly.c.inout_highlow=function(){
	return["HIGH"==this.getFieldValue("BOOL")?"HIGH":"LOW",Blockly.c.ORDER_ATOMIC]
};
Blockly.Blocks.inout_highlow={
	init:function(){this.setColour(230);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["HIGH","HIGH"],["LOW","LOW"]]),"BOOL");
	this.setOutput(!0,"Boolean");
	this.setTooltip("")
}};
//End.inout_highlow

//Logic
//inout_digital_readHigh
Blockly.c.inout_digital_readHigh=function(){
	var a=this.getFieldValue("PIN");
	Blockly.c.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";
	return["digitalRead("+a+") == 1",Blockly.c.ORDER_ATOMIC]
};
Blockly.Blocks.inout_digital_readHigh={
	init:function(){this.setColour(230);
	this.appendDummyInput()
		.appendField("数字输入 管脚#")
		.appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN")
		.appendField("为高电平?");
	this.setOutput(!0,"Boolean");
	this.setTooltip("")
}};
//End.inout_digital_readHigh

//inout_digital_readLow
Blockly.c.inout_digital_readLow=function(){
	var a=this.getFieldValue("PIN");
	Blockly.c.setups_["setup_input_"+a]="pinMode("+a+", INPUT);";
	return["digitalRead("+a+") == 0",Blockly.c.ORDER_ATOMIC]
};
Blockly.Blocks.inout_digital_readLow={
	init:function(){this.setColour(230);
	this.appendDummyInput()
		.appendField("数字输入 管脚#")
		.appendField(new Blockly.FieldDropdown(profile["default"].digital),"PIN")
		.appendField("为低电平?");
	this.setOutput(!0,"Boolean");
	this.setTooltip("")
}};
//End.inout_digital_readLow