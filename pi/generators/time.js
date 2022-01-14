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

Blockly.Python.time_delay_us=function(){
    Blockly.Python.definitions_['import time'] = 'import time';
    const functionName=Blockly.Python.provideFunction_('delayMicroseconds',[
        'def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(t):',
        '  start,end=0,0',
        '  start=time.time()',
        '  t=(t-3)/1000000',
        '  while end-start<t:',
        '    end=time.time()'
    ]);
    var delay_time=Blockly.Python.valueToCode(this,'DELAY_TIME',Blockly.Python.ORDER_ATOMIC)||'1';
	return functionName+"("+delay_time+")\n";
};