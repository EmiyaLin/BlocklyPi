Blockly.c = new Blockly.Generator("c");

//Blockly.c.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");

Blockly.c.ORDER_ATOMIC = 0;

Blockly.c.ORDER_UNARY_POSTFIX = 1;
Blockly.c.ORDER_UNARY_PREFIX = 2;

Blockly.c.ORDER_MULTIPLICATIVE = 3;

Blockly.c.ORDER_ADDITIVE = 4;

Blockly.c.ORDER_SHIFT = 5;

Blockly.c.ORDER_RELATIONAL = 6;

Blockly.c.ORDER_EQUALITY = 7;
Blockly.c.ORDER_BITWISE_AND = 8;
Blockly.c.ORDER_BITWISE_XOR = 9;
Blockly.c.ORDER_BITWISE_OR = 10;
Blockly.c.ORDER_LOGICAL_AND = 11;
Blockly.c.ORDER_LOGICAL_OR = 12;
Blockly.c.ORDER_CONDITIONAL = 13;

Blockly.c.ORDER_ASSIGNMENT = 14;
Blockly.c.ORDER_NONE = 99;
var profile = {
    c: {
        description: "c standard-compatible board",
        digital: [["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"], ["17", "17"], ["18", "18"], ["19", "19"], ["20", "20"], ["21", "21"], ["22", "22"], ["23", "23"], ["24", "24"], ["25", "25"], ["26", "26"], ["27", "27"], ["28", "28"], ["29", "29"]],
    },
    c_mega: {
        description: "c Mega-compatible board"
    }
};

profile["default"] = profile.c;

Blockly.c.init = function(a) {
    Blockly.c.definitions_ = Object.create(null);
    Blockly.c.setups_ = Object.create(null);
    Blockly.c.variableDB_ ? Blockly.c.variableDB_.reset() : Blockly.c.variableDB_ = new Blockly.Names(Blockly.c.RESERVED_WORDS_);
    var b = [];
    a = Blockly.Variables.allVariables(a);
    for (var c = 0; c < a.length; c++) b[c] = "int " + Blockly.c.variableDB_.getName(a[c], Blockly.Variables.NAME_TYPE) + ";\n";
    Blockly.c.definitions_.variables = b.join("\n")
};
Blockly.c.finish = function(a) {
    Blockly.c.definitions_.define_stdio = "#include <stdio.h>";
	Blockly.c.definitions_.define_stdlib = "#include <stdlib.h>";
	Blockly.c.definitions_.define_math = "#include <math.h>";
	Blockly.c.definitions_.define_wiringPi = "#include <wiringPi.h>";
    a = "  " + a.replace(/\n/g, "\n  ");
    a = a.replace(/\n\s+$/, "\n");
    a = "void loop() \n{\n" + a + "\n}";
    var b = [],
    c = [],
    d;
    for (d in Blockly.c.definitions_) {
        var e = Blockly.c.definitions_[d];
        e.match(/^#include/) ? b.push(e) : c.push(e)
    }
    e = [];
    for (d in Blockly.c.setups_) e.push(Blockly.c.setups_[d]);
    return (b.join("\n") + "\n\n" + c.join("\n") + "\nvoid setup() \n{\n  " + e.join("\n  ") + "\n}\n\n").replace(/\n\n+/g, "\n\n").replace(/\n*$/, "\n\n\n") + a + "\n\nint main(){\n  if( wiringPiSetup() == -1 ){\n    printf(\"Setup GPIO error!\\n\");\n    return -1;\n  };\n  printf(\"Press Ctrl+C to Exit.\\n\");\n  setup();\n  while(1){\n    loop();\n  }\n}"
};

Blockly.c.scrubNakedValue = function(a) {
    return a + ";\n"
};
Blockly.c.quote_ = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/\$/g, "\\$").replace(/'/g, "\\'");
    return '"' + a + '"'
};

Blockly.c.scrub_ = function(a, b) {
    if (null === b) return "";
    var c = "";
    if (!a.outputConnection || !a.outputConnection.targetConnection) {
        var d = a.getCommentText();
        d && (c += Blockly.c.prefixLines(d, "// ") + "\n");
        for (var e = 0; e < a.inputList.length; e++) a.inputList[e].type == Blockly.INPUT_VALUE && (d = a.inputList[e].connection.targetBlock()) && (d = Blockly.c.allNestedComments(d)) && (c += Blockly.c.prefixLines(d, "// "))
    }
    e = a.nextConnection && a.nextConnection.targetBlock();
    e = Blockly.c.blockToCode(e);
    return c + b + e
};