Blockly.Blocks.logic = {};
Blockly.Blocks.logic.HUE = 210;

Blockly.Blocks.controls_if = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
        this.setColour(Blockly.Blocks.logic.HUE);
        this.appendValueInput("IF0").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendStatementInput("DO0").appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setMutator(new Blockly.Mutator(["controls_if_elseif", "controls_if_else"]));
        var a = this;
        this.setTooltip(function() {
            if (a.elseifCount_ || a.elseCount_) {
                if (!a.elseifCount_ && a.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
                if (a.elseifCount_ && !a.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
                if (a.elseifCount_ && a.elseCount_) return Blockly.Msg.CONTROLS_IF_TOOLTIP_4
            } else return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            return ""
        });
        this.elseCount_ = this.elseifCount_ = 0
    },
    mutationToDom: function() {
        if (!this.elseifCount_ && !this.elseCount_) return null;
        var a = document.createElement("mutation");
        this.elseifCount_ && a.setAttribute("elseif", this.elseifCount_);
        this.elseCount_ && a.setAttribute("else", 1);
        return a
    },
    domToMutation: function(a) {
        this.elseifCount_ = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.elseCount_ = parseInt(a.getAttribute("else"), 10) || 0;
        for (a = 1; a <= this.elseifCount_; a++) this.appendValueInput("IF" + a).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
        this.appendStatementInput("DO" + a).appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        this.elseCount_ && this.appendStatementInput("ELSE").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE)
    },
    decompose: function(a) {
        var b = Blockly.Block.obtain(a, "controls_if_if");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 1; d <= this.elseifCount_; d++) {
            var e = Blockly.Block.obtain(a, "controls_if_elseif");
            e.initSvg();
            c.connect(e.previousConnection);
            c = e.nextConnection
        }
        this.elseCount_ && (a = Blockly.Block.obtain(a, "controls_if_else"), a.initSvg(), c.connect(a.previousConnection));
        return b
    },
    compose: function(a) {
        this.elseCount_ && this.removeInput("ELSE");
        this.elseCount_ = 0;
        for (var b = this.elseifCount_; 0 < b; b--) this.removeInput("IF" + b),
        this.removeInput("DO" + b);
        this.elseifCount_ = 0;
        for (a = a.getInputTargetBlock("STACK"); a;) {
            switch (a.type) {
            case "controls_if_elseif":
                this.elseifCount_++;
                var b = this.appendValueInput("IF" + this.elseifCount_).setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF),
                c = this.appendStatementInput("DO" + this.elseifCount_);
                c.appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
                a.valueConnection_ && b.connection.connect(a.valueConnection_);
                a.statementConnection_ && c.connection.connect(a.statementConnection_);
                break;
            case "controls_if_else":
                this.elseCount_++;

                b = this.appendStatementInput("ELSE");
                b.appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
                a.statementConnection_ && b.connection.connect(a.statementConnection_);
                break;
            default:
                throw "Unknown block type.";
            }
            a = a.nextConnection && a.nextConnection.targetBlock()
        }
    },
    saveConnections: function(a) {
        a = a.getInputTargetBlock("STACK");
        for (var b = 1; a;) {
            switch (a.type) {
            case "controls_if_elseif":
                var c = this.getInput("IF" + b),
                d = this.getInput("DO" + b);
                a.valueConnection_ = c && c.connection.targetConnection;
                a.statementConnection_ = d && d.connection.targetConnection;

                b++;
                break;
            case "controls_if_else":
                d = this.getInput("ELSE");
                a.statementConnection_ = d && d.connection.targetConnection;
                break;
            default:
                throw "Unknown block type.";
            }
            a = a.nextConnection && a.nextConnection.targetBlock()
        }
    }
};

Blockly.Blocks.controls_if_if = {
    init: function() {
        this.setColour(Blockly.Blocks.logic.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = !1
    }
};

Blockly.Blocks.controls_if_elseif = {
    init: function() {
        this.setColour(Blockly.Blocks.logic.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = !1
    }
};

Blockly.Blocks.controls_if_else = {
    init: function() {
        this.setColour(Blockly.Blocks.logic.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
        this.setPreviousStatement(!0);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = !1
    }
};

Blockly.Blocks.logic_compare = {
    init: function() {
        var a = this.RTL ? [["=", "EQ"], ["\u2260", "NEQ"], [">", "LT"], ["\u2265", "LTE"], ["<", "GT"], ["\u2264", "GTE"]] : [["=", "EQ"], ["\u2260", "NEQ"], ["<", "LT"], ["\u2264", "LTE"], [">", "GT"], ["\u2265", "GTE"]];
        this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
        this.setColour(Blockly.Blocks.logic.HUE);
        this.setOutput(!0, "Boolean");
        this.appendValueInput("A");
        this.appendValueInput("B").appendField(new Blockly.FieldDropdown(a), "OP");
        this.setInputsInline(!0);
        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("OP");
            return {
                EQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
                NEQ: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
                LT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
                LTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
                GT: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
                GTE: Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
            } [a]
        });
        this.prevBlocks_ = [null, null]
    },
    onchange: function() {
        var a = this.getInputTargetBlock("A"),
        b = this.getInputTargetBlock("B");
        if (a && b && !a.outputConnection.checkType_(b.outputConnection)) for (var c = 0; c < this.prevBlocks_.length; c++) {
            var d = this.prevBlocks_[c];
            if (d === a || d === b) d.setParent(null),
            d.bumpNeighbours_()
        }
        this.prevBlocks_[0] = a;
        this.prevBlocks_[1] = b
    }
};

Blockly.Blocks.logic_operation = {
    init: function() {
        var a = [[Blockly.Msg.LOGIC_OPERATION_AND, "AND"], [Blockly.Msg.LOGIC_OPERATION_OR, "OR"]];
        this.setHelpUrl(Blockly.Msg.LOGIC_OPERATION_HELPURL);
        this.setColour(Blockly.Blocks.logic.HUE);
        this.setOutput(!0, "Boolean");
        this.appendValueInput("A").setCheck("Boolean");
        this.appendValueInput("B").setCheck("Boolean").appendField(new Blockly.FieldDropdown(a), "OP");
        this.setInputsInline(!0);
        var b = this;
        this.setTooltip(function() {
            var a = b.getFieldValue("OP");
            return {
                AND: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND,
                OR: Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR
            } [a]
        })
    }
};
Blockly.Blocks.logic_negate = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.LOGIC_NEGATE_TITLE,
            args0: [{
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
            }],
            output: "Boolean",
            colour: Blockly.Blocks.logic.HUE,
            tooltip: Blockly.Msg.LOGIC_NEGATE_TOOLTIP,
            helpUrl: Blockly.Msg.LOGIC_NEGATE_HELPURL
        })
    }
};

Blockly.Blocks.logic_boolean = {
    init: function() {
        var a = [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, "TRUE"], [Blockly.Msg.LOGIC_BOOLEAN_FALSE, "FALSE"]];
        this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL);
        this.setColour(Blockly.Blocks.logic.HUE);
        this.setOutput(!0, "Boolean");
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(a), "BOOL");
        this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP)
    }
};

Blockly.Blocks.logic_null = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_NULL_HELPURL);
        this.setColour(Blockly.Blocks.logic.HUE);
        this.setOutput(!0);
        this.appendDummyInput().appendField(Blockly.Msg.LOGIC_NULL);
        this.setTooltip(Blockly.Msg.LOGIC_NULL_TOOLTIP)
    }
};

Blockly.Blocks.logic_ternary = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL);
        this.setColour(Blockly.Blocks.logic.HUE);
        this.appendValueInput("IF").setCheck("Boolean").appendField(Blockly.Msg.LOGIC_TERNARY_CONDITION);
        this.appendValueInput("THEN").appendField(Blockly.Msg.LOGIC_TERNARY_IF_TRUE);
        this.appendValueInput("ELSE").appendField(Blockly.Msg.LOGIC_TERNARY_IF_FALSE);
        this.setOutput(!0);
        this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP);
        this.prevParentConnection_ = null
    },
    onchange: function() {
        var a = this.getInputTargetBlock("THEN"),
        b = this.getInputTargetBlock("ELSE"),
        c = this.outputConnection.targetConnection;
        if ((a || b) && c) for (var d = 0; 2 > d; d++) {
            var e = 1 == d ? a: b;
            e && !e.outputConnection.checkType_(c) && (c === this.prevParentConnection_ ? (this.setParent(null), c.sourceBlock_.bumpNeighbours_()) : (e.setParent(null), e.bumpNeighbours_()))
        }
        this.prevParentConnection_ = c
    }
};

//Blocks Control
Blockly.c.logic = {};
Blockly.c.controls_if = function() {
    for (var a = 0,
    b = Blockly.c.valueToCode(this, "IF" + a, Blockly.c.ORDER_NONE) || "false", c = Blockly.c.statementToCode(this, "DO" + a), d = "if (" + b + ") {\n" + c + "\n}", a = 1; a <= this.elseifCount_; a++) b = Blockly.c.valueToCode(this, "IF" + a, Blockly.c.ORDER_NONE) || "false",
    c = Blockly.c.statementToCode(this, "DO" + a),
    d += " else if (" + b + ") {\n" + c + "}";
    this.elseCount_ && (c = Blockly.c.statementToCode(this, "ELSE"), d += " else {\n" + c + "\n}");
    return d + "\n"
};

Blockly.c.logic_compare = function() {
    var a = this.getFieldValue("OP"),
    a = Blockly.c.logic_compare.OPERATORS[a],
    b = "==" == a || "!=" == a ? Blockly.c.ORDER_EQUALITY: Blockly.c.ORDER_RELATIONAL,
    c = Blockly.c.valueToCode(this, "A", b) || "0",
    d = Blockly.c.valueToCode(this, "B", b) || "0";
    return [c + " " + a + " " + d, b]
};
Blockly.c.logic_compare.OPERATORS = {
    EQ: "==",
    NEQ: "!=",
    LT: "<",
    LTE: "<=",
    GT: ">",
    GTE: ">="
};

Blockly.c.logic_operation = function() {
    var a = "AND" == this.getFieldValue("OP") ? "&&": "||",
    b = "&&" == a ? Blockly.c.ORDER_LOGICAL_AND: Blockly.c.ORDER_LOGICAL_OR,
    c = Blockly.c.valueToCode(this, "A", b) || "false",
    d = Blockly.c.valueToCode(this, "B", b) || "false";
    return [c + " " + a + " " + d, b]
};
Blockly.c.logic_negate = function() {
    var a = Blockly.c.ORDER_UNARY_PREFIX;
    return ["!" + (Blockly.c.valueToCode(this, "BOOL", a) || "false"), a]
};

Blockly.c.logic_boolean = function() {
    return ["TRUE" == this.getFieldValue("BOOL") ? "true": "false", Blockly.c.ORDER_ATOMIC]
};
Blockly.c.logic_null = function() {
    return ["NULL", Blockly.c.ORDER_ATOMIC]
};