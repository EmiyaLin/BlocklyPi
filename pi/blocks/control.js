Blockly.Blocks['try_except_block'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("尝试")
      this.appendStatementInput("TRY")
          .setCheck(null);
      this.appendDummyInput()
          .appendField("发生异常时")
      this.appendStatementInput("EXCEPT")
          .setCheck(null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("尝试运行代码，如果发生异常，执行备用代码");
      this.setHelpUrl("");
    }
  };
  