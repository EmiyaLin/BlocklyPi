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

Blockly.Python.file_isfile=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return ["os.path.isfile("+path+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.file_remove=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return "os.remove("+path+")\n";
};

Blockly.Python.file_listdir=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return ["os.listdir("+path+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.file_mkdir=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return "os.mkdir("+path+")\n";
};

Blockly.Python.file_isdir=function(){
    Blockly.Python.definitions_['import os'] = 'import os';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return ["os.path.isdir("+path+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.file_rmdir=function(){
    Blockly.Python.definitions_['import shutil'] = 'import shutil';
    var path=Blockly.Python.valueToCode(this,'PATH',Blockly.Python.ORDER_ATOMIC);
	return "shutil.rmtree("+path+")\n";
};