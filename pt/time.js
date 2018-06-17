var time_block_color=120;
//init_time
Blockly.Python.time_init_time=function(){
	return"import time\n"
};
Blockly.Blocks.time_init_time={init:function(){
	this.setColour(time_block_color);
	this.appendDummyInput()
		.appendField("初始化 time");
		this.setPreviousStatement(!0,null);
	this.setNextStatement(!0,null);
}};
//End.init_time、

Blockly.Python.time_delay = function() {
  var delay_time = Blockly.Python.valueToCode(this, 'DELAY_TIME', Blockly.Python.ORDER_ATOMIC) || '1'
  var code = 'time.sleep(' + delay_time + ')\n';
  return code;
};
Blockly.Blocks.time_delay = {
  init: function() {
    this.setColour(time_block_color);
    this.appendValueInput("DELAY_TIME", Number)
        .appendField("延时(s)")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};