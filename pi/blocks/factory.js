Blockly.Blocks.factory_import={
    init:function(){
        this.setColour(75);
        this.appendDummyInput("")
            .appendField("import ")
            .appendField(new Blockly.FieldTextInput('time'), 'IMPORT');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.factory_do={
    init:function(){
        this.setColour(75);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('print(\"Hello world!\")'),'VALUE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.factory_block={
    init:function(){
        this.setColour(75);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('def func()'),'VALUE')
            .appendField(":");
        this.appendStatementInput('DO');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.factory_var={
    init:function(){
        this.setColour(75);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('test'), 'VALUE');
        this.setOutput(true);
    }
};