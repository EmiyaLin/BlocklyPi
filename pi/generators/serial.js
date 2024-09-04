Blockly.Python.serial_init=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var DEV_FILE=Blockly.Python.valueToCode(this,'DEV_FILE',Blockly.Python.ORDER_ATOMIC);
	var BAUD=Blockly.Python.valueToCode(this,'BAUD',Blockly.Python.ORDER_ATOMIC);
	var TIMEOUT=Blockly.Python.valueToCode(this,'TIMEOUT',Blockly.Python.ORDER_ATOMIC);
	return ["serial.Serial("+DEV_FILE+","+BAUD+",timeout="+TIMEOUT+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_open=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	return SER_OBJ+".open()\n";
};

Blockly.Python.serial_isopen=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	return [SER_OBJ+".isOpen()",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_close=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	return SER_OBJ+".close()\n";
};

Blockly.Python.serial_inwaiting=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	return [SER_OBJ+".inWaiting()",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_flushinput=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	return SER_OBJ+".flushInput()\n";
};

Blockly.Python.serial_read=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	var SIZE=Blockly.Python.valueToCode(this,'SIZE',Blockly.Python.ORDER_ATOMIC);
	return [SER_OBJ+".read("+SIZE+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_readline=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	return [SER_OBJ+".readline()",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.serial_write=function(){
	Blockly.Python.definitions_['import serial'] = 'import serial';
	var SER_OBJ=Blockly.Python.valueToCode(this,'SER_OBJ',Blockly.Python.ORDER_ATOMIC);
	var DATA=Blockly.Python.valueToCode(this,'DATA',Blockly.Python.ORDER_ATOMIC);
	return SER_OBJ+".write("+DATA+".encode('utf-8'))\n";
};