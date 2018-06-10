//sensor_rang
Blockly.c.sensor_rang=function(){
	var Trig=this.getFieldValue("Trig"),
	Echo=this.getFieldValue("Echo");
	Blockly.c.setups_["setup_input_"+Trig]="pinMode("+Trig+", OUTPUT);",
	Blockly.c.setups_["setup_input_"+Echo]="pinMode("+Echo+", INPUT);";
	return["disMeasure("+Trig+","+Echo+")",99]
};
Blockly.Blocks.sensor_rang={
	init:function(){this.setColour(100);
	this.appendDummyInput()
		.appendField("超声波测距 Trig#")
		.appendField(new Blockly.FieldDropdown(profile["default"].digital),"Trig")
		.appendField(" Echo#")
		.appendField(new Blockly.FieldDropdown(profile["default"].digital),"Echo");
	this.setOutput(!0,"Boolean");
	this.setTooltip("")
}};
//End.sensor_rang