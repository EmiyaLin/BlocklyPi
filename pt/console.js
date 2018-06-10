//console_printf
Blockly.c.console_printf=function(){
	return "printf(\""+this.getFieldValue('VALUE')+"\");\n";
};
Blockly.Blocks.console_printf = {
  init: function() {
    this.setColour(0);
	this.appendDummyInput("")
		.appendField("控制台.打印 ")
		.appendField(new Blockly.FieldTextInput('Hello world!'), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//End.console_printf

//console_printf_nl
Blockly.c.console_printf_nl=function(){
	return "printf(\""+this.getFieldValue('VALUE')+"\\n\");\n";
};
Blockly.Blocks.console_printf_nl = {
  init: function() {
    this.setColour(0);
	this.appendDummyInput("")
		.appendField("控制台.打印(自动换行) ")
		.appendField(new Blockly.FieldTextInput('Hello world!'), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//End.console_printf_nl

//console_nl
Blockly.c.console_nl=function(){
	return "printf(\"\\n\");\n";
};
Blockly.Blocks.console_nl = {
  init: function() {
    this.setColour(0);
	this.appendDummyInput("")
		.appendField("控制台.换行")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//End.console_nl

//console_vars
Blockly.c.console_vars=function(){
	TYPE=this.getFieldValue('TYPE');
	VAR=Blockly.c.valueToCode(this, "VARS0",99);
	return "printf(\""+TYPE+"\","+VAR+");\n";
};
Blockly.Blocks.console_vars = {
  init: function() {
    this.setColour(0);
	this.appendValueInput("VARS0")
		.appendField("控制台.打印变量 类型")
		.appendField(new Blockly.FieldDropdown([["整型","%d"],["浮点","%f"]]),"TYPE")
		.appendField("变量");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//End.console_vars