Blockly.Blocks['setup_uart_block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("启用uart串口：")
            .appendField(new Blockly.FieldNumber(115200), "BAUD");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Setup UART communication with the specified baud rate.");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['car_run'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("小车移动")
            .appendField(new Blockly.FieldDropdown([["前进", "forward"], ["后退", "backward"], ["左转", "left"], ["右转", "right"], ["左平移", "left_shift"], ["右平移", "right_shift"]]), "DIRECTION");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("速度");
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField("时间(ms)");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip("控制小车的移动方向和速度");
    }
};
Blockly.Blocks['car_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("停止小车");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip("停止小车的所有运动");
    }
};