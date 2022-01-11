Blockly.Blocks.time_delay={
    init:function(){
        this.setColour(120);
        this.appendValueInput("DELAY_TIME", Number)
            .appendField("延时(s)")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.time_delay_ms={
    init:function(){
        this.setColour(120);
        this.appendValueInput("DELAY_TIME", Number)
            .appendField("延时(ms)")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.time_now={
    init:function(){
        this.setColour(120);
        this.appendDummyInput()
            .appendField("当前")
            .appendField(new Blockly.FieldDropdown([["年","year"],["月","month"],["日","day"],["时","hour"],["分","minute"],["秒","second"]]),"MODE");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.time_time={
    init:function(){
        this.setColour(120);
        this.appendDummyInput()
            .appendField("当前系统时间戳");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};