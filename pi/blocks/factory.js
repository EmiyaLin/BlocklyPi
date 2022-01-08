Blockly.Blocks.factory_do={
    init:function(){
        this.setColour(65);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('print(\"Hello world!\")'),'VALUE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.factory_import={
    init:function(){
        this.setColour(65);
        this.appendDummyInput("")
            .appendField("import ")
            .appendField(new Blockly.FieldTextInput('time'), 'INCLUDE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.factory_return={
    init:function(){
        this.setColour(65);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('test'), 'VALUE');
        this.setOutput(true);
    }
};