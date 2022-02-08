Blockly.Python.network_get=function(){
    Blockly.Python.definitions_['import urllib2'] = 'import urllib2';
    var url=Blockly.Python.valueToCode(this,'URL',Blockly.Python.ORDER_ATOMIC);
	return "urllib2.urlopen(urllib2.Request("+url+"))\n";
};

Blockly.Python.network_getout=function(){
    Blockly.Python.definitions_['import urllib2'] = 'import urllib2';
    var url=Blockly.Python.valueToCode(this,'URL',Blockly.Python.ORDER_ATOMIC);
	return ["urllib2.urlopen(urllib2.Request("+url+")).read()",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.network_tcp_init=function(){
	Blockly.Python.definitions_['import socket'] = 'import socket';
	var HOST=Blockly.Python.valueToCode(this,'HOST',Blockly.Python.ORDER_ATOMIC);
	var PORT=Blockly.Python.valueToCode(this,'PORT',Blockly.Python.ORDER_ATOMIC);
	return ["socket.socket(socket.AF_INET,socket.SOCK_STREAM)",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.network_tcp_connect=function(){
	Blockly.Python.definitions_['import socket'] = 'import socket';
	var TCP_OBJ=Blockly.Python.valueToCode(this,'TCP_OBJ',Blockly.Python.ORDER_ATOMIC);
	var HOST=Blockly.Python.valueToCode(this,'HOST',Blockly.Python.ORDER_ATOMIC);
	var PORT=Blockly.Python.valueToCode(this,'PORT',Blockly.Python.ORDER_ATOMIC);
	return TCP_OBJ+".connect(("+HOST+","+PORT+"))\n";
};


Blockly.Python.network_tcp_close=function(){
	Blockly.Python.definitions_['import socket'] = 'import socket';
    var TCP_OBJ=Blockly.Python.valueToCode(this,'TCP_OBJ',Blockly.Python.ORDER_ATOMIC);
	return TCP_OBJ+".close()\n";
};

Blockly.Python.network_tcp_recv=function(){
	Blockly.Python.definitions_['import socket'] = 'import socket';
    var TCP_OBJ=Blockly.Python.valueToCode(this,'TCP_OBJ',Blockly.Python.ORDER_ATOMIC);
    var SIZE=Blockly.Python.valueToCode(this,'SIZE',Blockly.Python.ORDER_ATOMIC);
	return [TCP_OBJ+".recv("+SIZE+")",Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.network_tcp_send=function(){
	Blockly.Python.definitions_['import socket'] = 'import socket';
    var TCP_OBJ=Blockly.Python.valueToCode(this,'TCP_OBJ',Blockly.Python.ORDER_ATOMIC);
	var DATA=Blockly.Python.valueToCode(this,'DATA',Blockly.Python.ORDER_ATOMIC);
	return TCP_OBJ+".sendall("+DATA+")\n";
};