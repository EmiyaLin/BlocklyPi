Blockly.Blocks.math = {};
Blockly.Blocks.math.HUE = 230;
Blockly.Blocks.math_number = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldTextInput("0", Blockly.FieldTextInput.numberValidator), "NUM");
        this.setOutput(!0, "Number");
        this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP)
    }
};

Blockly.Blocks.math_arithmetic = {
    init: function() {
        var a = [[Blockly.Msg.MATH_ADDITION_SYMBOL, "ADD"], [Blockly.Msg.MATH_SUBTRACTION_SYMBOL, "MINUS"], [Blockly.Msg.MATH_MULTIPLICATION_SYMBOL, "MULTIPLY"], [Blockly.Msg.MATH_DIVISION_SYMBOL, "DIVIDE"], [Blockly.Msg.MATH_POWER_SYMBOL, "POWER"]];
        this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(!0, "Number");
        this.appendValueInput("A").setCheck("Number");
        this.appendValueInput("B").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "OP");
        this.setInputsInline(!0);
        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("OP");
            return {
                ADD: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
                MINUS: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
                MULTIPLY: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
                DIVIDE: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
                POWER: Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
            } [a]
        })
    }
};

Blockly.Blocks.math_single = {
    init: function() {
        var a = [[Blockly.Msg.MATH_SINGLE_OP_ROOT, "ROOT"], [Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE, "ABS"], ["-", "NEG"], ["ln", "LN"], ["log10", "LOG10"], ["e^", "EXP"], ["10^", "POW10"]];
        this.setHelpUrl(Blockly.Msg.MATH_SINGLE_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(!0, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "OP");
        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("OP");
            return {
                ROOT: Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT,
                ABS: Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS,
                NEG: Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG,
                LN: Blockly.Msg.MATH_SINGLE_TOOLTIP_LN,
                LOG10: Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10,
                EXP: Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP,
                POW10: Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10
            } [a]
        })
    }
};

Blockly.Blocks.math_trig = {
    init: function() {
        var a = [[Blockly.Msg.MATH_TRIG_SIN, "SIN"], [Blockly.Msg.MATH_TRIG_COS, "COS"], [Blockly.Msg.MATH_TRIG_TAN, "TAN"], [Blockly.Msg.MATH_TRIG_ASIN, "ASIN"], [Blockly.Msg.MATH_TRIG_ACOS, "ACOS"], [Blockly.Msg.MATH_TRIG_ATAN, "ATAN"]];
        this.setHelpUrl(Blockly.Msg.MATH_TRIG_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(!0, "Number");
        this.appendValueInput("NUM").setCheck("Number").appendField(new Blockly.FieldDropdown(a), "OP");
        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("OP");
            return {
                SIN: Blockly.Msg.MATH_TRIG_TOOLTIP_SIN,
                COS: Blockly.Msg.MATH_TRIG_TOOLTIP_COS,
                TAN: Blockly.Msg.MATH_TRIG_TOOLTIP_TAN,
                ASIN: Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN,
                ACOS: Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS,
                ATAN: Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN
            } [a]
        })
    }
};

Blockly.Blocks.math_constant = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.MATH_CONSTANT_HELPURL);
        this.setColour(Blockly.Blocks.math.HUE);
        this.setOutput(!0, "Number");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown([["\u03c0", "PI"], ["e", "E"], ["sqrt(2)", "SQRT2"]]), "CONSTANT");
        this.setTooltip(Blockly.Msg.MATH_CONSTANT_TOOLTIP)
    }
};

//Blocks Control
Blockly.c.math = {};
Blockly.c.math_number = function() {
    var a = window.parseFloat(this.getFieldValue("NUM"));
    return [a, 0 > a ? Blockly.c.ORDER_UNARY_PREFIX: Blockly.c.ORDER_ATOMIC]
};
Blockly.c.math_arithmetic = function() {
    var a = this.getFieldValue("OP"),
    b = Blockly.c.math_arithmetic.OPERATORS[a],
    a = b[0],
    b = b[1],
    c = Blockly.c.valueToCode(this, "A", b) || "0",
    d = Blockly.c.valueToCode(this, "B", b) || "0";
    return a ? [c + a + d, b] : ["pow(" + c + ", " + d + ")", Blockly.c.ORDER_UNARY_POSTFIX]
};

Blockly.c.math_arithmetic.OPERATORS = {
    ADD: [" + ", Blockly.c.ORDER_ADDITIVE],
    MINUS: [" - ", Blockly.c.ORDER_ADDITIVE],
    MULTIPLY: [" * ", Blockly.c.ORDER_MULTIPLICATIVE],
    DIVIDE: [" / ", Blockly.c.ORDER_MULTIPLICATIVE],
    POWER: [null, Blockly.c.ORDER_NONE]
};


Blockly.c.math_single = function() {
  // Math operators with single operand.
  var operator = this.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedents.
    arg = Blockly.c.valueToCode(this, 'NUM',
        Blockly.c.ORDER_UNARY_PREFIX) || '0';
    if (arg[0] == '-') {
      // --3 is not legal in Dart.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.c.ORDER_UNARY_PREFIX];
  }
  if (operator == 'ABS' || operator.substring(0, 5) == 'ROUND') {
    arg = Blockly.c.valueToCode(this, 'NUM',
        Blockly.c.ORDER_UNARY_POSTFIX) || '0';
  } else if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.c.valueToCode(this, 'NUM',
        Blockly.c.ORDER_MULTIPLICATIVE) || '0';
  } else {
    arg = Blockly.c.valueToCode(this, 'NUM',
        Blockly.c.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses.
  switch (operator) {
    case 'ABS':
      code = 'abs('+arg+')';
      break;
    case 'ROOT':
      code = 'sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'log(' + arg + ')';
      break;
    case 'EXP':
      code = 'exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'pow(10,' + arg + ')';
      break;
    case 'SIN':
      code = 'sin(' + arg + ' / 180.0 * 3.14159)';
      break;
    case 'COS':
      code = 'cos(' + arg + ' / 180.0 * 3.14159)';
      break;
    case 'TAN':
      code = 'tan(' + arg + ' / 180.0 * 3.14159)';
      break;
  }
  if (code) {
    return [code, Blockly.c.ORDER_UNARY_POSTFIX];
  }
  // Second, handle cases which generate values that may need parentheses.
  switch (operator) {
    case 'LOG10':
      code = 'log(' + arg + ') / log(10)';
      break;
    case 'ASIN':
      code = 'asin(' + arg + ') / 3.14159 * 180';
      break;
    case 'ACOS':
      code = 'acos(' + arg + ') / 3.14159 * 180';
      break;
    case 'ATAN':
      code = 'atan(' + arg + ') / 3.14159 * 180';
      break;
    default:
      throw 'Unknown math operator: ' + operator;
  }
  return [code, Blockly.c.ORDER_MULTIPLICATIVE];
};
Blockly.c.math_trig = Blockly.c.math_single;

Blockly.c.math_constant = function() {
    var type=this.getFieldValue('CONSTANT');
	switch (type) {
    case 'PI':
      code = '3.141592';
      break;
    case 'E':
      code = '2.718281';
      break;
    case 'SQRT2':
      code = 'sqrt(2)';
      break;
    default:
      throw 'Unknown';
  	}
	return code;
};