Blockly.Blocks.thread_thread_init={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("线程")
            .appendField(new Blockly.FieldTextInput('thread'), 'THREAD_OBJ')
            .appendField("初始化  函数名称");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldTextInput('func'), 'FUNC');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_thread_initblock={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("线程")
            .appendField(new Blockly.FieldTextInput('thread'), 'THREAD_OBJ')
            .appendField("初始化  通过执行");
        this.appendStatementInput('DO');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.thread_thread_start={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("启动线程")
            .appendField(new Blockly.FieldTextInput('thread'), 'THREAD_OBJ');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_lock_init={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("锁")
            .appendField(new Blockly.FieldTextInput('lock'), 'LOCK_OBJ')
            .appendField("初始化");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_lock_acquire={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("获得锁")
            .appendField(new Blockly.FieldTextInput('lock'), 'LOCK_OBJ');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_lock_release={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("释放锁")
            .appendField(new Blockly.FieldTextInput('lock'), 'LOCK_OBJ');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_semaphore_init={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("信号量")
            .appendField(new Blockly.FieldTextInput('semaphore'), 'SEMAPHORE_OBJ')
            .appendField("初始化");
        this.appendValueInput("VALUE",Number)
			.appendField("初值")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_semaphore_acquire={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("信号量")
            .appendField(new Blockly.FieldTextInput('semaphore'), 'SEMAPHORE_OBJ')
            .appendField("减1");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_semaphore_release={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("信号量")
            .appendField(new Blockly.FieldTextInput('semaphore'), 'SEMAPHORE_OBJ')
            .appendField("加1");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_event_init={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("事件")
            .appendField(new Blockly.FieldTextInput('event'), 'EVENT_OBJ')
            .appendField("初始化");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_event_set={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("事件")
            .appendField(new Blockly.FieldTextInput('event'), 'EVENT_OBJ')
            .appendField("设为")
            .appendField(new Blockly.FieldDropdown([["True","set"],["False","clear"]]),"MODE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.thread_event_wait={
    init:function(){
        this.setColour(230);
        this.appendDummyInput("")
            .appendField("阻塞当前线程直到事件")
            .appendField(new Blockly.FieldTextInput('event'), 'EVENT_OBJ')
            .appendField("被设为True");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};