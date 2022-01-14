Blockly.Blocks.device_stepper_init={
    init:function(){
        this.setColour(100);
        this.appendDummyInput("")
            .appendField("步进电机")
            .appendField(new Blockly.FieldTextInput('stepper'),'STEPPER_OBJ')
            .appendField("初始化");
        for(let i=1;i<=4;i++){
            this.appendValueInput("PIN"+i)
                .appendField("管脚"+i+"#",Number)
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT);
        };
        this.appendValueInput("STEPS")
            .appendField("每转步数",Number)
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("SPEED")
            .appendField("设置转速",Number)
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(false);
    }
};

Blockly.Blocks.device_stepper_step={
    init:function(){
        this.setColour(100);
        this.appendDummyInput("")
            .appendField("步进电机")
            .appendField(new Blockly.FieldTextInput('stepper'),'STEPPER_OBJ');
        this.appendValueInput("STEPS")
            .appendField("移动步数",Number)
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};