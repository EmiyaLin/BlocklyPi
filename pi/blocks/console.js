var console_block_color=230;

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