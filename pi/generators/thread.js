Blockly.Python.thread_thread_init=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var THREAD_OBJ=OBJ_FLAG+this.getFieldValue('THREAD_OBJ');
	var FUNC=this.getFieldValue('FUNC');
	return THREAD_OBJ+"=threading.Thread(target="+FUNC+")\n";
};

Blockly.Python.thread_thread_start=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var THREAD_OBJ=OBJ_FLAG+this.getFieldValue('THREAD_OBJ');
	return THREAD_OBJ+".start()\n";
};

Blockly.Python.thread_lock_init=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var LOCK_OBJ=OBJ_FLAG+this.getFieldValue('LOCK_OBJ');
	return LOCK_OBJ+"=threading.Lock()\n";
};

Blockly.Python.thread_lock_acquire=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var LOCK_OBJ=OBJ_FLAG+this.getFieldValue('LOCK_OBJ');
	return LOCK_OBJ+".acquire()\n";
};

Blockly.Python.thread_lock_release=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var LOCK_OBJ=OBJ_FLAG+this.getFieldValue('LOCK_OBJ');
	return LOCK_OBJ+".release()\n";
};

Blockly.Python.thread_semaphore_init=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
    var SEMAPHORE_OBJ=OBJ_FLAG+this.getFieldValue('SEMAPHORE_OBJ');
    var VALUE=Blockly.Python.valueToCode(this,'VALUE',Blockly.Python.ORDER_ATOMIC);
	return SEMAPHORE_OBJ+"=threading.Semaphore("+VALUE+")\n";
};

Blockly.Python.thread_semaphore_acquire=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
    var SEMAPHORE_OBJ=OBJ_FLAG+this.getFieldValue('SEMAPHORE_OBJ');
	return SEMAPHORE_OBJ+".acquire()\n";
};

Blockly.Python.thread_semaphore_release=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
    var SEMAPHORE_OBJ=OBJ_FLAG+this.getFieldValue('SEMAPHORE_OBJ');
	return SEMAPHORE_OBJ+".release()\n";
};

Blockly.Python.thread_event_init=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
    var EVENT_OBJ=OBJ_FLAG+this.getFieldValue('EVENT_OBJ');
	return EVENT_OBJ+"=threading.Event()\n";
};

Blockly.Python.thread_event_set=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
    var EVENT_OBJ=OBJ_FLAG+this.getFieldValue('EVENT_OBJ');
    var MODE=this.getFieldValue('MODE');
	return EVENT_OBJ+"."+MODE+"()\n";
};

Blockly.Python.thread_event_wait=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
    var EVENT_OBJ=OBJ_FLAG+this.getFieldValue('EVENT_OBJ');
	return EVENT_OBJ+".wait()\n";
};