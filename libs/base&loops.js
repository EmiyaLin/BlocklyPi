Blockly.Blocks.base = {};
Blockly.Blocks.base_delay = {
    init: function() {
        this.setColour(120);
        this.appendValueInput("DELAY_TIME", "Number").appendField("延时").setCheck("Number");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Delay specific time")
    }
};
Blockly.Blocks.loops = {};
Blockly.Blocks.loops.HUE = 120;
Blockly.Blocks.controls_for = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.CONTROLS_FOR_TITLE,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: null
            },
            {
                type: "input_value",
                name: "FROM",
                check: "Number",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "TO",
                check: "Number",
                align: "RIGHT"
            },
            {
                type: "input_value",
                name: "BY",
                check: "Number",
                align: "RIGHT"
            }],
            inputsInline: !0,
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.loops.HUE,
            helpUrl: Blockly.Msg.CONTROLS_FOR_HELPURL
        });
        this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_FOR_INPUT_DO);

        var a = this;
        this.setTooltip(function() {
            return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace("%1", a.getFieldValue("VAR"))
        })
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(a, b) {
        Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR")
    },
    customContextMenu: function(a) {
        if (!this.isCollapsed()) {
            var b = {
                enabled: !0
            },
            c = this.getFieldValue("VAR");
            b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", c);
            c = goog.dom.createDom("field", null, c);
            c.setAttribute("name", "VAR");

            c = goog.dom.createDom("block", null, c);
            c.setAttribute("type", "variables_get");
            b.callback = Blockly.ContextMenu.callbackFactory(this, c);
            a.push(b)
        }
    }
};
Blockly.Blocks.controls_whileUntil = {
    init: function() {
        var a = [[Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE, "WHILE"], [Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL, "UNTIL"]];
        this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendValueInput("BOOL").setCheck("Boolean").appendField(new Blockly.FieldDropdown(a), "MODE");
        this.appendStatementInput("DO").appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);

        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("MODE");
            return {
                WHILE: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
                UNTIL: Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL
            } [a]
        })
    }
};

//Blocks Control
Blockly.c.base = {};
Blockly.c.base_delay = function() {
    return "delay(" + (Blockly.c.valueToCode(this, "DELAY_TIME", Blockly.c.ORDER_ATOMIC) || "1000") + ");\n"
};

Blockly.c.controls_for = function() {
    var a = Blockly.c.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE),
    b = Blockly.c.valueToCode(this, "FROM", Blockly.c.ORDER_ASSIGNMENT) || "0",
    c = Blockly.c.valueToCode(this, "TO", Blockly.c.ORDER_ASSIGNMENT) || "0",
    d = Blockly.c.statementToCode(this, "DO");
    Blockly.c.INFINITE_LOOP_TRAP && (d = Blockly.c.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + d);
    if (b.match(/^-?\d+(\.\d+)?$/) && c.match(/^-?\d+(\.\d+)?$/)) var e = parseFloat(b) <= parseFloat(c),
    d = "for (" + a + " = " + b + "; " + a + (e ? " <= ": " >= ") + c + "; " + a + (e ? "++": "--") + ") {\n" + d + "}\n";
    else d = "",
    e = b,
    b.match(/^\w+$/) || b.match(/^-?\d+(\.\d+)?$/) || (e = Blockly.c.variableDB_.getDistinctName(a + "_start", Blockly.Variables.NAME_TYPE), d += "int " + e + " = " + b + ";\n"),
    b = c,
    c.match(/^\w+$/) || c.match(/^-?\d+(\.\d+)?$/) || (b = Blockly.c.variableDB_.getDistinctName(a + "_end", Blockly.Variables.NAME_TYPE), d += "int " + b + " = " + c + ";\n"),
    d += "for (" + a + " = " + e + ";\n    (" + e + " <= " + b + ") ? " + a + " <= " + b + " : " + a + " >= " + b + ";\n    " + a + " += (" + e + " <= " + b + ") ? 1 : -1) {\n" + branch0 + "}\n";
    return d
};
Blockly.c.controls_whileUntil = function() {
    var a = "UNTIL" == this.getFieldValue("MODE"),
    b = Blockly.c.valueToCode(this, "BOOL", a ? Blockly.c.ORDER_LOGICAL_NOT: Blockly.c.ORDER_NONE) || "false",
    c = Blockly.c.statementToCode(this, "DO");
    Blockly.c.INFINITE_LOOP_TRAP && (c = Blockly.c.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + c);
    a && (b = "!" + b);
    return "while (" + b + ") {\n" + c + "}\n"
};