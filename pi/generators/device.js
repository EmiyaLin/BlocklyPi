Blockly.Python.device_stepper_init=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from stepper import Stepper'] = 'from stepper import Stepper';
    var STEPPER_OBJ=this.getFieldValue('STEPPER_OBJ');
    var pin1=Blockly.Python.valueToCode(this,'PIN1',Blockly.Python.ORDER_ATOMIC)||1;
    var pin2=Blockly.Python.valueToCode(this,'PIN2',Blockly.Python.ORDER_ATOMIC)||1;
    var pin3=Blockly.Python.valueToCode(this,'PIN3',Blockly.Python.ORDER_ATOMIC)||1;
    var pin4=Blockly.Python.valueToCode(this,'PIN4',Blockly.Python.ORDER_ATOMIC)||1;
    var steps=Blockly.Python.valueToCode(this,'STEPS',Blockly.Python.ORDER_ATOMIC)||1;
    var speed=Blockly.Python.valueToCode(this,'SPEED',Blockly.Python.ORDER_ATOMIC)||1;
    return STEPPER_OBJ+"=Stepper("+steps+","+pin1+","+pin2+","+pin3+","+pin4+")\n"+STEPPER_OBJ+".setSpeed("+speed+")\n";
};

Blockly.Python.device_stepper_step=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from stepper import Stepper'] = 'from stepper import Stepper';
    var STEPPER_OBJ=this.getFieldValue('STEPPER_OBJ');
    var steps=Blockly.Python.valueToCode(this,'STEPS',Blockly.Python.ORDER_ATOMIC)||1;
    return STEPPER_OBJ+".step("+steps+")\n";
};