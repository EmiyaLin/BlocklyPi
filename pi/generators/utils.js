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