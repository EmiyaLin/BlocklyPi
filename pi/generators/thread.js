Blockly.Python.thread_thread_init=function(){
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var THREAD_OBJ=OBJ_FLAG+this.getFieldValue('THREAD_OBJ');
	var FUNC=this.getFieldValue('FUNC');
	return THREAD_OBJ+"=threading.Thread(target="+FUNC+")\n";
};

Blockly.Python.thread_thread_initblock=function(block){
	var globals = [];
	var workspace = block.workspace;
	var usedVariables = Blockly.Variables.allUsedVarModels(workspace) || [];
	for (let i=0,variable;(variable=usedVariables[i]);i++){
		var varName=variable.name;
		if(block.getVars().indexOf(varName)===-1) {
			globals.push(Blockly.Python.variableDB_.getName(varName,Blockly.Variables.NAME_TYPE));
		};
	};
	var devVarList=Blockly.Variables.allDeveloperVariables(workspace);
	for (let i=0;i<devVarList.length;i++){
		globals.push(Blockly.Python.nameDB_.getName(devVarList[i],Blockly.Names.DEVELOPER_VARIABLE_TYPE));
	};
	var globalString = globals.length?Blockly.Python.INDENT+'global '+globals.join(', ')+'\n':'';
	Blockly.Python.definitions_['import threading'] = 'import threading';
	var THREAD_OBJ=OBJ_FLAG+this.getFieldValue('THREAD_OBJ');
	var FUNC=OBJ_FLAG+"thread"+THREAD_OBJ;
	var DO=Blockly.Python.statementToCode(this,'DO')||Blockly.Python.PASS;
	return "def "+FUNC+"():\n"+globalString+DO+THREAD_OBJ+"=threading.Thread(target="+FUNC+")\n";
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