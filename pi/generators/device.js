Blockly.Python.device_dht11=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['import dht11'] = 'import dht11';
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC)||1;
    var mode=this.getFieldValue("MODE");
    return ["dht11.get"+mode+"("+pin+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.device_bmp180=function(){
    Blockly.Python.definitions_['import bmp180'] = 'import bmp180';
    var bus=Blockly.Python.valueToCode(this,'BUS',Blockly.Python.ORDER_ATOMIC);
    var bmp180_addr=Blockly.Python.valueToCode(this,'BMP180_ADDR',Blockly.Python.ORDER_ATOMIC);
    var mode=this.getFieldValue("MODE");
    return ["bmp180.get"+mode+"("+bus+","+bmp180_addr+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.device_hcsr04_distance=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['import time'] = 'import time';
    const functionName=Blockly.Python.provideFunction_('hcsr04_distance',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(Trig,Echo):',
        '  GPIO.setup(Trig,GPIO.OUT)',
        '  GPIO.setup(Echo,GPIO.IN)',
        '  GPIO.output(Trig,GPIO.HIGH)',
        '  time.sleep(0.000015)',
        '  GPIO.output(Trig,GPIO.LOW)',
        '  while not GPIO.input(Echo):',
        '    pass',
        '  t1=time.time()',
        '  while GPIO.input(Echo):',
        '    pass',
        '  t2=time.time()',
        '  return (t2-t1)*34000/2'
    ]);
    var trig=Blockly.Python.valueToCode(this,'TRIG',Blockly.Python.ORDER_ATOMIC)||1;
    var echo=Blockly.Python.valueToCode(this,'ECHO',Blockly.Python.ORDER_ATOMIC)||1;
    return [functionName+"("+trig+","+echo+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.device_ads1115=function(){
    Blockly.Python.definitions_['import ads1115'] = 'import ads1115';
    var bus=Blockly.Python.valueToCode(this,'BUS',Blockly.Python.ORDER_ATOMIC);
    var ads1115_addr=Blockly.Python.valueToCode(this,'ADS1115_ADDR',Blockly.Python.ORDER_ATOMIC);
    var channel=this.getFieldValue("CHANNEL");
    return ["ads1115.ADS1115_analogRead("+bus+","+ads1115_addr+","+channel+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.device_stepper_init=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from stepper import Stepper'] = 'from stepper import Stepper';
    var pin1=Blockly.Python.valueToCode(this,'PIN1',Blockly.Python.ORDER_ATOMIC)||1;
    var pin2=Blockly.Python.valueToCode(this,'PIN2',Blockly.Python.ORDER_ATOMIC)||1;
    var pin3=Blockly.Python.valueToCode(this,'PIN3',Blockly.Python.ORDER_ATOMIC)||1;
    var pin4=Blockly.Python.valueToCode(this,'PIN4',Blockly.Python.ORDER_ATOMIC)||1;
    var steps=Blockly.Python.valueToCode(this,'STEPS',Blockly.Python.ORDER_ATOMIC)||1;
    var speed=Blockly.Python.valueToCode(this,'SPEED',Blockly.Python.ORDER_ATOMIC)||1;
    return ["Stepper("+steps+","+pin1+","+pin2+","+pin3+","+pin4+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.device_stepper_speed=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from stepper import Stepper'] = 'from stepper import Stepper';
    var STEPPER_OBJ=Blockly.Python.valueToCode(this,'STEPPER_OBJ',Blockly.Python.ORDER_ATOMIC);
    var steps=Blockly.Python.valueToCode(this,'SPEED',Blockly.Python.ORDER_ATOMIC)||1;
    return STEPPER_OBJ+".setSpeed("+steps+")\n";
};

Blockly.Python.device_stepper_step=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['from stepper import Stepper'] = 'from stepper import Stepper';
    var STEPPER_OBJ=Blockly.Python.valueToCode(this,'STEPPER_OBJ',Blockly.Python.ORDER_ATOMIC);
    var steps=Blockly.Python.valueToCode(this,'STEPS',Blockly.Python.ORDER_ATOMIC)||1;
    return STEPPER_OBJ+".step("+steps+")\n";
};

Blockly.Python.device_beep=function(){
    Blockly.Python.definitions_['import RPi.GPIO as GPIO'] = "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)";
    Blockly.Python.definitions_['import time'] = 'import time';
    const functionName=Blockly.Python.provideFunction_('beep',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(pin,f,t):',
        '  GPIO.setup(pin,GPIO.OUT)',
        '  pwm=GPIO.PWM(pin,f)',
        '  pwm.start(50)',
        '  time.sleep(t)',
        '  pwm.stop()'
    ]);
    var pin=Blockly.Python.valueToCode(this,'PIN',Blockly.Python.ORDER_ATOMIC)||1;
    var freq=Blockly.Python.valueToCode(this,'FREQ',Blockly.Python.ORDER_ATOMIC)||1;
    var time=Blockly.Python.valueToCode(this,'TIME',Blockly.Python.ORDER_ATOMIC)||1;
    return functionName+"("+pin+","+freq+","+time+")\n";
};