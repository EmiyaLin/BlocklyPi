Blockly.Python.time_init_time=function(){
	return"import time\n"
};

Blockly.Python.time_delay=function(){
    var delay_time=Blockly.Python.valueToCode(this,'DELAY_TIME',Blockly.Python.ORDER_ATOMIC)||'1';
    return 'time.sleep('+delay_time+')\n';
};