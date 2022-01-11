Blockly.Python.time_delay=function(){
    Blockly.Python.definitions_['import time'] = 'import time';
    var delay_time=Blockly.Python.valueToCode(this,'DELAY_TIME',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'time.sleep('+delay_time+')\n';
};

Blockly.Python.time_delay_ms=function(){
    Blockly.Python.definitions_['import time'] = 'import time';
    var delay_time=Blockly.Python.valueToCode(this,'DELAY_TIME',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'time.sleep('+delay_time+'/1000)\n';
};

Blockly.Python.time_now=function(){
    Blockly.Python.definitions_['import datetime'] = 'import datetime';
    var mode=this.getFieldValue("MODE");
    return ['datetime.datetime.now().'+mode,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.time_time=function(){
    Blockly.Python.definitions_['import time'] = 'import time';
    return ['time.time()',Blockly.Python.ORDER_ATOMIC];
};