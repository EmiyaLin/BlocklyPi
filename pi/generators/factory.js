Blockly.Python.factory_do=function(){
	return this.getFieldValue('VALUE')+"\n";
};

Blockly.Python.factory_import=function(){
	var INCLUDE=this.getFieldValue('INCLUDE');
	Blockly.Python.definitions_['import '+INCLUDE]='import '+INCLUDE;
};

Blockly.Python.factory_return=function(){
	return [this.getFieldValue('VALUE'),Blockly.Python.ORDER_ATOMIC];
};