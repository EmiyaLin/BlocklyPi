Blockly.Blocks['ultrasonic_sensor_setup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("初始化超声波传感器 触发引脚")
            .appendField(new Blockly.FieldNumber(0, 0, 40), "TRIG")
            .appendField(" 回响引脚")
            .appendField(new Blockly.FieldNumber(0, 0, 40), "ECHO");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("初始化超声波传感器的触发引脚和回响引脚");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['ultrasonic_sensor_distance'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("超声波测距");
        this.setOutput(true, "Number");
        this.setColour(160);
        this.setTooltip("获取超声波传感器的距离");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['button_stop_program'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("按键引脚")
          .appendField(new Blockly.FieldNumber(0, 0, 40), "BUTTON_PIN")
          .appendField(" 终止程序");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
      this.setTooltip("按下指定按键后终止程序");
      this.setHelpUrl("");
    }
  };
  