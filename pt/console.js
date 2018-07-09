var console_block_color=230;
//console_print
Blockly.Python.console_print=function(){
  var message = Blockly.Python.valueToCode(this, 'MESSAGE', Blockly.Python.ORDER_ATOMIC) || '1'
  var code = 'print(' + message + ')\n';
  return code;
};
Blockly.Blocks.console_print={
  init: function() {
    this.setColour(console_block_color);
    this.appendValueInput("MESSAGE")
        .appendField("控制台 输出")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
  }
};
//End.console_print

//console_print
Blockly.Python.console_input=function(){
  var message = Blockly.Python.valueToCode(this, 'MESSAGE', Blockly.Python.ORDER_ATOMIC) || '1'
  var code = 'input(' + message + ')\n';
  return [code];
};
Blockly.Blocks.console_input={
  init: function() {
    this.setColour(console_block_color);
    this.appendValueInput("MESSAGE")
        .appendField("控制台 输入 提示信息")
	this.setOutput(!0);
	this.setTooltip("");
    this.setInputsInline(false);
  }
};
//End.console_print
