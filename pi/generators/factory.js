Blockly.Python.factory_import=function(){
	var IMPORT=this.getFieldValue('IMPORT');
	return 'import '+IMPORT;
};

Blockly.Python.factory_do=function(){
	return this.getFieldValue('VALUE')+"\n";
};

Blockly.Python.factory_return=function(){
	return [this.getFieldValue('VALUE'),Blockly.Python.ORDER_ATOMIC];
};