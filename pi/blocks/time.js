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

Blockly.Blocks.time_delay_us={
    init:function(){
        this.setColour(120);
        this.appendValueInput("DELAY_TIME", Number)
            .appendField("延时(us)")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};