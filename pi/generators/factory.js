Blockly.Python.factory_import=function(){
	var IMPORT=this.getFieldValue('IMPORT');
	return 'import '+IMPORT+'\n';
};

Blockly.Python.factory_do=function(){
	return this.getFieldValue('VALUE')+"\n";
};

Blockly.Python.factory_block=function(){
	var DO=Blockly.Python.statementToCode(this,'DO')||Blockly.Python.PASS;
	return this.getFieldValue('VALUE')+":\n"+DO;
};

Blockly.Python.factory_var=function(){
	return [this.getFieldValue('VALUE'),Blockly.Python.ORDER_ATOMIC];
};