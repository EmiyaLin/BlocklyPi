Blockly.Python.pwm_init=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=this.getFieldValue('PWM_OBJ');
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var freq=Blockly.Python.valueToCode(this,'FREQ',Blockly.Python.ORDER_ATOMIC);
	return "GPIO.setup("+pin+",GPIO.OUT)\n"+pwm_obj+"=GPIO.PWM("+pin+","+freq+")\n";
};

Blockly.Python.pwm_start=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=this.getFieldValue('PWM_OBJ');
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var duty=Blockly.Python.valueToCode(this,'DUTY',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".start("+duty+")\n";
};

Blockly.Python.pwm_freq=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=this.getFieldValue('PWM_OBJ');
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var freq=Blockly.Python.valueToCode(this,'FREQ',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".ChangeFrequency("+freq+")\n";
};

Blockly.Python.pwm_duty=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=this.getFieldValue('PWM_OBJ');
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var duty=Blockly.Python.valueToCode(this,'DUTY',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".ChangeDutyCycle("+duty+")\n";
};

Blockly.Python.pwm_stop=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=this.getFieldValue('PWM_OBJ');
	return pwm_obj+".stop()\n";
};