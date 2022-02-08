Blockly.Blocks.pwm_init={
	init:function(){
		this.setColour(45);
		this.appendValueInput("PIN", Number)
			.appendField("创建PWM对象 管脚#")
			.setCheck("Number");
		this.appendValueInput("FREQ", Number)
			.appendField("频率")
			.setCheck("Number");
		this.appendDummyInput("")
			.appendField("Hz");
		this.setOutput(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.pwm_start={
	init:function(){
		this.setColour(45);
		this.appendValueInput("PWM_OBJ")
			.appendField("启用PWM对象");
        this.appendValueInput("DUTY", Number)
			.appendField("占空比")
            .setCheck("Number");
        this.appendDummyInput("")
			.appendField("%");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.pwm_freq={
	init:function(){
		this.setColour(45);
		this.appendValueInput("PWM_OBJ")
			.appendField("设置PWM对象");
		this.appendValueInput("FREQ", Number)
			.appendField("频率")
			.setCheck("Number");
		this.appendDummyInput("")
			.appendField("Hz");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.pwm_duty={
	init:function(){
		this.setColour(45);
		this.appendValueInput("PWM_OBJ")
			.appendField("设置PWM对象");
		this.appendValueInput("DUTY", Number)
			.appendField("占空比")
			.setCheck("Number");
		this.appendDummyInput("")
			.appendField("%");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.pwm_stop={
	init:function(){
		this.setColour(45);
		this.appendValueInput("PWM_OBJ")
			.appendField("停用PWM对象");
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};