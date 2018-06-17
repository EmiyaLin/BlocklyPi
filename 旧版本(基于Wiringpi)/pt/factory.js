Blockly.c.factory_do=function(){
	return this.getFieldValue('VALUE')+"\n";
};
Blockly.c.factory_include = function() {
	var INCLUDE = this.getFieldValue('INCLUDE');
	Blockly.c.definitions_['define_'+INCLUDE] = '#include <'+INCLUDE+'.h>';
	return '';
};
//End.con


Blockly.Blocks.factory_do = {
  init: function() {
    this.setColour(65);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldTextInput('printf(\"Hello world!\");'), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
Blockly.Blocks.factory_include = {
  init: function() {
    this.setColour(65);
	this.appendDummyInput("")
		.appendField("#include <")
		.appendField(new Blockly.FieldTextInput('math'), 'INCLUDE')
        .appendField(".h>");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
