Blockly.Python.inout_pins=function(){
	return this.getFieldValue("PIN")
};

Blockly.Python.inout_init_gpio=function(){
	return"import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)\n"
};

Blockly.Python.inout_mode=function(){
	var a=Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC),
	b=this.getFieldValue("STAT");
	return"GPIO.setup("+a+","+b+")\n"
};

Blockly.Python.inout_highlow=function(){
	return["HIGH"==this.getFieldValue("BOOL")?"GPIO.HIGH":"GPIO.LOW",Blockly.Python.ORDER_ATOMIC]
};

Blockly.Python.inout_output = function() {
    var dropdown_pin =  Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
    var dropdown_stat =  Blockly.Python.valueToCode(this, 'STAT', Blockly.Python.ORDER_ATOMIC);
    var code = "";
    code += 'GPIO.output('+dropdown_pin+','+dropdown_stat+')\n'
    return code;
  };

  Blockly.Python.inout_input=function(){
	var a= Blockly.Python.valueToCode(this, 'PIN', Blockly.Python.ORDER_ATOMIC);
	return["GPIO.input("+a+")",Blockly.Python.ORDER_ATOMIC]
};