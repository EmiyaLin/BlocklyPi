Blockly.Python.pwm_init=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var freq=Blockly.Python.valueToCode(this,'FREQ',Blockly.Python.ORDER_ATOMIC);
	return ["GPIO.PWM("+pin+","+freq+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.pwm_start=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=Blockly.Python.valueToCode(this,'PWM_OBJ',Blockly.Python.ORDER_ATOMIC);
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var duty=Blockly.Python.valueToCode(this,'DUTY',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".start("+duty+")\n";
};

Blockly.Python.pwm_freq=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=Blockly.Python.valueToCode(this,'PWM_OBJ',Blockly.Python.ORDER_ATOMIC);
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var freq=Blockly.Python.valueToCode(this,'FREQ',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".ChangeFrequency("+freq+")\n";
};

Blockly.Python.pwm_duty=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=Blockly.Python.valueToCode(this,'PWM_OBJ',Blockly.Python.ORDER_ATOMIC);
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var duty=Blockly.Python.valueToCode(this,'DUTY',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".ChangeDutyCycle("+duty+")\n";
};

Blockly.Python.pwm_stop=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var pwm_obj=Blockly.Python.valueToCode(this,'PWM_OBJ',Blockly.Python.ORDER_ATOMIC);
	return pwm_obj+".stop()\n";
};