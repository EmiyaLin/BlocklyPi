Blockly.Python['ultrasonic_sensor_setup'] = function (block) {
    var trig = block.getFieldValue('TRIG');
    var echo = block.getFieldValue('ECHO');

    // 导入必要的模块
    Blockly.Python.definitions_['import_RPi.GPIO'] = 'import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)';
    Blockly.Python.definitions_['import_time'] = 'import time';

    // 定义setup_sensor函数
    var code = `
def setup_sensor(TRIG_PIN, ECHO_PIN):
    global TRIG, ECHO
    TRIG = TRIG_PIN
    ECHO = ECHO_PIN
    GPIO.setup(TRIG, GPIO.OUT, initial=0)
    GPIO.setup(ECHO, GPIO.IN, pull_up_down=GPIO.PUD_UP)\n\n`;

    // 返回初始化的调用
    code += 'setup_sensor(' + trig + ', ' + echo + ')\n';
    return code;
};
Blockly.Python['ultrasonic_sensor_distance'] = function (block) {

    // 定义distance函数
    var functionName = Blockly.Python.provideFunction_('distance', [
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
        '    global TRIG, ECHO',
        '    GPIO.output(TRIG, 0)',
        '    time.sleep(0.000002)',
        '    GPIO.output(TRIG, 1)',
        '    time.sleep(0.00001)',
        '    GPIO.output(TRIG, 0)',
        '    while GPIO.input(ECHO) == 0:',
        '        pass',
        '    time1 = time.time()',
        '    while GPIO.input(ECHO) == 1:',
        '        pass',
        '    time2 = time.time()',
        '    during = time2 - time1',
        '    dis = during * 340 / 2 * 100',
        '    if dis > 999:',
        '        return 500',
        '    return dis'
    ]);

    // 返回测距函数调用
    var code = functionName + '()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['button_stop_program'] = function(block) {
    var button_pin = block.getFieldValue('BUTTON_PIN');
  
    // 导入必要的模块
    Blockly.Python.definitions_['import_RPi.GPIO'] = 'import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BOARD)\nGPIO.setwarnings(False)';
    Blockly.Python.definitions_['import_time'] = 'import time';
  
    // 定义按键检测函数
    var code = `
  GPIO.setup(${button_pin}, GPIO.IN, pull_up_down=GPIO.PUD_UP)
  
  def button_stop_program():
      while True:
          if GPIO.input(${button_pin}) == GPIO.LOW:
              print("程序终止")
              GPIO.cleanup()
              break
          time.sleep(0.1)
  `;
    return code;
  };
  