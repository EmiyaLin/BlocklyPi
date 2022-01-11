Blockly.Python.console_print=function(){
    var message=Blockly.Python.valueToCode(this,'MESSAGE',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'print('+message+')\n';
};

Blockly.Python.console_input=function(){
    var message=Blockly.Python.valueToCode(this,'MESSAGE',Blockly.Python.ORDER_ATOMIC)||'1';
    return ['raw_input('+ message+')',Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.console_shell=function(){
    Blockly.Python.definitions_['import commands'] = "import commands";
    var shell=Blockly.Python.valueToCode(this,'SHELL',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'commands.getoutput('+shell+')\n';
};

Blockly.Python.console_shellout=function(){
    Blockly.Python.definitions_['import commands'] = "import commands";
    var shell=Blockly.Python.valueToCode(this,'SHELL',Blockly.Python.ORDER_ATOMIC)||'1';
    return ['commands.getoutput('+shell+')',Blockly.Python.ORDER_ATOMIC];
};