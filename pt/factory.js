var factory_block_color=65;
//factory_do
Blockly.Python.factory_do=function(){
	return this.getFieldValue('VALUE')+"\n";
};
Blockly.Blocks.factory_do = {
  init: function() {
    this.setColour(factory_block_color);
	this.appendDummyInput("")
		.appendField(new Blockly.FieldTextInput('print(\"Hello world!\")'), 'VALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//End.factory_do
//factory_import
Blockly.Python.factory_import = function() {
	var INCLUDE = this.getFieldValue('INCLUDE');
	return 'import '+INCLUDE+'\n';
};
Blockly.Blocks.factory_import = {
  init: function() {
    this.setColour(factory_block_color);
	this.appendDummyInput("")
		.appendField("import ")
		.appendField(new Blockly.FieldTextInput('time'), 'INCLUDE')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
//End.factory_import