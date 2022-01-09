Blockly.Python.file_read=function(){
    const functionName=Blockly.Python.provideFunction_('file_get_contents',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(path):',
        '  with open(path,"r") as file:',
        '    return file.read()'
    ]);
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return [functionName+"("+path+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.file_write=function(){
    const functionName=Blockly.Python.provideFunction_('file_put_contents',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(path,content):',
        '  with open(path,"w") as file:',
        '    return file.write(content)'
    ]);
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
    var content=Blockly.Python.valueToCode(this,'CONTENT',Blockly.Python.ORDER_ATOMIC);
	return functionName+"("+path+","+content+")\n";
};

Blockly.Python.file_exists=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return "os.path.exists("+path+")";
};

Blockly.Python.file_remove=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return "os.remove("+path+")";
};