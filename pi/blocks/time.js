var time_block_color=120;

Blockly.Blocks.time_init_time={init:function(){
	this.setColour(time_block_color);
	this.appendDummyInput()
		.appendField("初始化 time");
		this.setPreviousStatement(!0,null);
	this.setNextStatement(!0,null);
}};

Blockly.Blocks.time_delay = {
  init: function() {
    this.setColour(time_block_color);
    this.appendValueInput("DELAY_TIME", Number)
        .appendField("延时(s)")
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};