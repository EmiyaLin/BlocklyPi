Blockly.Python.console_print=function(){
  var message = Blockly.Python.valueToCode(this, 'MESSAGE', Blockly.Python.ORDER_ATOMIC) || '1'
  var code = 'print(' + message + ')\n';
  return code;
};

Blockly.Python.console_input=function(){
  var message = Blockly.Python.valueToCode(this, 'MESSAGE', Blockly.Python.ORDER_ATOMIC) || '1'
  var code = 'input(' + message + ')\n';
  return [code];
};