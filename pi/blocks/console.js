Blockly.Blocks.console_print={
    init:function(){
        this.setColour(230);
        this.appendValueInput("MESSAGE")
            .appendField("控制台 输出");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
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

Blockly.Blocks.console_shell={
    init:function(){
        this.setColour(230);
        this.appendValueInput("SHELL")
            .appendField("控制台 执行shell",String)
            .setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.console_shellout={
    init:function(){
        this.setColour(230);
        this.appendValueInput("SHELL")
            .appendField("控制台 执行shell",String)
            .setCheck("String");
        this.appendDummyInput("")
            .appendField("并获得输出")
        this.setOutput(true);
        this.setInputsInline(true);
    }
};