Blockly.Python.utils_now=function(){
    Blockly.Python.definitions_['import datetime'] = 'import datetime';
    var mode=this.getFieldValue("MODE");
    return ['datetime.datetime.now().'+mode,Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.utils_time=function(){
    Blockly.Python.definitions_['import time'] = 'import time';
    return ['time.time()',Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.utils_break=function(){
    return ["'\\n'",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.utils_int=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["int("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.utils_long=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["long("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.utils_float=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["float("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.utils_str=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["str("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};