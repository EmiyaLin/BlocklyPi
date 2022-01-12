Blockly.Python.helper_break=function(){
    return ["'\\n'",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_int=function(){
    var INPUT=this.getFieldValue('INPUT');
    return ["int("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_long=function(){
    var INPUT=this.getFieldValue('INPUT');
    return ["long("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_float=function(){
    var INPUT=this.getFieldValue('INPUT');
    return ["float("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.helper_str=function(){
    var INPUT=this.getFieldValue('INPUT');
    return ["str("+INPUT+")",Blockly.Python.ORDER_ATOMIC];
};