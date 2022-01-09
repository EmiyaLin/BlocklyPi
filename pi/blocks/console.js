Blockly.Blocks.console_print={
    init:function(){
        this.setColour(230);
        this.appendValueInput("MESSAGE")
            .appendField("控制台 输出");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(false);
    }
};

Blockly.Blocks.console_input={
    init:function(){
        this.setColour(230);
        this.appendDummyInput()
            .appendField("控制台 输入");
        this.appendValueInput("MESSAGE")
            .appendField("提示信息");
        this.setOutput(true);
        this.setInputsInline(false);
    }
};