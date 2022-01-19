Blockly.Blocks.network_get={
    init:function(){
        this.setColour(0);
        this.appendValueInput("URL",String)
			.appendField("执行GET请求  URL")
            .setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.network_getout={
    init:function(){
        this.setColour(0);
        this.appendValueInput("URL",String)
			.appendField("执行GET请求并返回数据  URL")
            .setCheck("String");
        this.setOutput(true,"String");
    }
};

Blockly.Blocks.network_tcp_init={
    init:function(){
        this.setColour(0);
        this.appendDummyInput("")
            .appendField("TCP客户端")
            .appendField(new Blockly.FieldTextInput('tcp'),'TCP_OBJ')
            .appendField("初始化");
        this.appendValueInput("HOST",String)
			.appendField("主机地址")
            .setCheck("String");
        this.appendValueInput("PORT",Number)
			.appendField("端口号")
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.network_tcp_close={
    init:function(){
        this.setColour(0);
        this.appendDummyInput("")
            .appendField("TCP客户端")
            .appendField(new Blockly.FieldTextInput('tcp'),'TCP_OBJ')
            .appendField("关闭客户端");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks.network_tcp_recv={
    init:function(){
	    this.setColour(0);
	    this.appendDummyInput("")
            .appendField("TCP客户端")
            .appendField(new Blockly.FieldTextInput('tcp'),'TCP_OBJ')
            .appendField("接收数据");
        this.appendValueInput("SIZE",Number)
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("字节");
        this.setOutput(true,"String");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.network_tcp_send={
    init:function(){
	    this.setColour(0);
	    this.appendDummyInput("")
            .appendField("TCP客户端")
            .appendField(new Blockly.FieldTextInput('tcp'),'TCP_OBJ');
        this.appendValueInput("DATA")
            .appendField("发送数据")
            .setCheck("String");
        this.setPreviousStatement(true);
	    this.setNextStatement(true);
    }
};