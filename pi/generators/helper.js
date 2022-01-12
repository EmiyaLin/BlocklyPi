Blockly.Python.helper_break=function(){
    return ["'\\n'",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_int=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["int("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_long=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["long("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_float=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["float("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_str=function(){
    var INPUT=Blockly.Python.valueToCode(this,'INPUT',Blockly.Python.ORDER_ATOMIC);
    return ["str("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};