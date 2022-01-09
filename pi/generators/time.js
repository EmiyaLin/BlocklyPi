Blockly.Python.time_delay=function(){
    Blockly.Python.definitions_['import time'] = 'import time';
    var delay_time=Blockly.Python.valueToCode(this,'DELAY_TIME',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'time.sleep('+delay_time+')\n';
};