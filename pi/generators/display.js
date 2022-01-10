Blockly.Python.display_init_lcd1602=function(){
    Blockly.Python.definitions_['import LCD1602'] = "import LCD1602";
	return "LCD1602.init_lcd()\n";
};

Blockly.Python.display_print_lcd1602=function(){
    Blockly.Python.definitions_['import LCD1602'] = "import LCD1602";
    var x=Blockly.Python.valueToCode(this,'x',Blockly.Python.ORDER_ATOMIC);
    var y=Blockly.Python.valueToCode(this,'y',Blockly.Python.ORDER_ATOMIC);
    var str=Blockly.Python.valueToCode(this,'STR',Blockly.Python.ORDER_ATOMIC);
	return "LCD1602.print_lcd("+y+"-1,"+x+"-1,"+str+")\n";
};

Blockly.Python.display_print_lcd1602=function(){
    Blockly.Python.definitions_['import LCD1602'] = "import LCD1602";
    var x=Blockly.Python.valueToCode(this,'x',Blockly.Python.ORDER_ATOMIC);
    var y=Blockly.Python.valueToCode(this,'y',Blockly.Python.ORDER_ATOMIC);
    var str=Blockly.Python.valueToCode(this,'STR',Blockly.Python.ORDER_ATOMIC);
	return "LCD1602.print_lcd("+y+"-1,"+x+"-1,"+str+")\n";
};

Blockly.Python.display_printline_lcd1602=function(){
    Blockly.Python.definitions_['import LCD1602'] = "import LCD1602";
    var str1=Blockly.Python.valueToCode(this,'STR1',Blockly.Python.ORDER_ATOMIC);
    var str2=Blockly.Python.valueToCode(this,'STR2',Blockly.Python.ORDER_ATOMIC);
	return "LCD1602.print_lcd(0,0,"+str1+")\nLCD1602.print_lcd(0,1,"+str2+")\n";
};

Blockly.Python.display_clear_lcd1602=function(){
    Blockly.Python.definitions_['import LCD1602'] = "import LCD1602";
	return "LCD1602.clear_lcd()\n";
};