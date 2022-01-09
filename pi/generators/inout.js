Blockly.Python.inout_pins=function(){
	Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
	return [this.getFieldValue("PIN"),Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_mode=function(){
	Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
	var a=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
	var b=this.getFieldValue("STAT");
	return "GPIO.setup("+a+","+b+")\n";
};

Blockly.Python.inout_highlow=function(){
	Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
	return ["HIGH"==this.getFieldValue("BOOL")?"GPIO.HIGH":"GPIO.LOW",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.inout_output=function() {
	Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    var dropdown_pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat=Blockly.Python.valueToCode(this,'STAT',Blockly.Python.ORDER_ATOMIC);
    return 'GPIO.output('+dropdown_pin+','+dropdown_stat+')\n';
};

Blockly.Python.inout_input=function(){
	Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
	var a=Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	return	["GPIO.input("+a+")",Blockly.Python.ORDER_ATOMIC];
};