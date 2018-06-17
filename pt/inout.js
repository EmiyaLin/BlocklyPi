var inout_block_color=20;
//init_gpio
Blockly.Python.inout_init_gpio=function(){
	return"import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)\n"
};
Blockly.Blocks.inout_init_gpio={init:function(){
	this.setColour(inout_block_color);
	this.appendDummyInput()
		.appendField("初始化 RPi.GPIO as GPIO");
		this.setPreviousStatement(!0,null);
	this.setNextStatement(!0,null);
}};
//End.init_gpio
//inout_mode
Blockly.Python.inout_mode=function(){
	var a=this.getFieldValue("PIN"),
	b=this.getFieldValue("STAT");
	return"GPIO.setup("+a+","+b+")\n"
};
Blockly.Blocks.inout_mode={init:function(){
	this.setColour(inout_block_color); 
	this.appendDummyInput()
		.appendField("设置模式 管脚#")
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
		.appendField("设为")
		.appendField(new Blockly.FieldDropdown([["输出","GPIO.OUT"],["输入","GPIO.IN"]]),"STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
}};
//End.inout_mode
//inout_highlow
Blockly.Python.inout_highlow=function(){
	return["HIGH"==this.getFieldValue("BOOL")?"GPIO.HIGH":"GPIO.LOW",Blockly.Python.ORDER_ATOMIC]
};
Blockly.Blocks.inout_highlow={
	init:function(){this.setColour(inout_block_color);
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["HIGH","HIGH"],["LOW","LOW"]]),"BOOL");
	this.setOutput(!0,"Boolean");
	this.setTooltip("")
}};
//End.inout_highlow

//----extBlocks---
//inout_output
Blockly.Blocks.inout_output = {
  init: function() {
    this.setColour(inout_block_color);
    this.appendDummyInput()
		.appendField("数字输出 管脚#")
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
        .appendField("设为")
		.appendField(new Blockly.FieldDropdown([["HIGH","GPIO.HIGH"],["LOW","GPIO.LOW"]]),"STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};
Blockly.Python.inout_output = function() {
  var dropdown_pin =  this.getFieldValue("PIN");
  var dropdown_stat = this.getFieldValue("STAT");
  var code = "";
  code += 'GPIO.output('+dropdown_pin+','+dropdown_stat+')\n'
  return code;
};
//End.inout_output

//inout_input
Blockly.Python.inout_input=function(){
	var a=this.getFieldValue("PIN");
	return["GPIO.input("+a+")",Blockly.Python.ORDER_ATOMIC]
};
Blockly.Blocks.inout_input={
	init:function(){this.setColour(inout_block_color);
	this.appendDummyInput()
		.appendField("数字输入 管脚#")
		.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
	this.setOutput(!0,"Boolean");
	this.setTooltip("");
	this.setInputsInline(true);
}};
//End.inout_input
//----End.extBlocks---