Blockly.Blocks.pwm_init={
	init:function(){
		this.setColour(45);
		this.appendDummyInput("")
			.appendField("创建PWM对象")
			.appendField(new Blockly.FieldTextInput('pwm'),'PWM_OBJ');
		this.appendValueInput("PIN", Number)
			.appendField("管脚#")
			.setCheck("Number");
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

Blockly.Blocks.pwm_start={
	init:function(){
		this.setColour(45);
		this.appendDummyInput("")
			.appendField("启用PWM对象")
            .appendField(new Blockly.FieldTextInput('pwm'),'PWM_OBJ');
        this.appendValueInput("DUTY", Number)
			.appendField(" 占空比")
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
		this.appendDummyInput("")
			.appendField("设置PWM对象")
			.appendField(new Blockly.FieldTextInput('pwm'),'PWM_OBJ');
		this.appendValueInput("FREQ", Number)
			.appendField(" 频率")
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
		this.appendDummyInput("")
			.appendField("设置PWM对象")
			.appendField(new Blockly.FieldTextInput('pwm'),'PWM_OBJ');
		this.appendValueInput("DUTY", Number)
			.appendField(" 占空比")
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
		this.appendDummyInput("")
			.appendField("停用PWM对象")
			.appendField(new Blockly.FieldTextInput('pwm'),'PWM_OBJ');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
	}
};