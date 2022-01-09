Blockly.Python.console_print=function(){
    var message=Blockly.Python.valueToCode(this,'MESSAGE',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'print('+message+')\n';
};

Blockly.Python.console_input=function(){
    var message=Blockly.Python.valueToCode(this,'MESSAGE',Blockly.Python.ORDER_ATOMIC)||'1';
    return ['raw_input('+ message+')',Blockly.Python.ORDER_ATOMIC];
};