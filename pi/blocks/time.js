Blockly.Blocks.time_init_time={init:function(){
	this.setColour(120);
	this.appendDummyInput()
		.appendField("初始化 time");
		this.setPreviousStatement(true);
	this.setNextStatement(true);
}};

Blockly.Blocks.time_delay = {
  init: function() {
    this.setColour(120);
    this.appendValueInput("DELAY_TIME", Number)
        .appendField("延时(s)")
        .setCheck("Number");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};