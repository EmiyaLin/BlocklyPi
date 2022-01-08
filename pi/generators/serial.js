Blockly.Python.serial_init_serial=function(){
	return "import serial\n";
};

Blockly.Python.serial_init=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	var DEV_FILE=Blockly.Python.valueToCode(this,'DEV_FILE',Blockly.Python.ORDER_ATOMIC);
	var BAUD=Blockly.Python.valueToCode(this,'BAUD',Blockly.Python.ORDER_ATOMIC);
	var TIMEOUT=Blockly.Python.valueToCode(this,'TIMEOUT',Blockly.Python.ORDER_ATOMIC);
	return SER_OBJ+"=serial.Serial("+DEV_FILE+","+BAUD+",timeout="+TIMEOUT+")\n";
};

Blockly.Python.serial_open=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	return SER_OBJ+".open()\n";
};

Blockly.Python.serial_isopen=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	return [SER_OBJ+".isOpen()",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_close=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	return SER_OBJ+".close()\n";
};

Blockly.Python.serial_read=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	var SIZE=Blockly.Python.valueToCode(this,'SIZE',Blockly.Python.ORDER_ATOMIC);
	return [SER_OBJ+".read("+SIZE+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_readline=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	return [SER_OBJ+".readline()",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_write=function(){
	var SER_OBJ=this.getFieldValue('SER_OBJ');
	var DATA=Blockly.Python.valueToCode(this,'DATA',Blockly.Python.ORDER_ATOMIC);
	return SER_OBJ+".write("+DATA+")\n";
};