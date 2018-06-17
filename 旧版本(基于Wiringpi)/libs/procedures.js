Blockly.Blocks.procedures = {};
Blockly.Blocks.procedures.HUE = 290;

Blockly.Blocks.procedures_defnoreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.setColour(Blockly.Blocks.procedures.HUE);
        var a = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE, this),
        a = new Blockly.FieldTextInput(a, Blockly.Procedures.rename);
        a.setSpellcheck(!1);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
        this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));

        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.arguments_ = [];
        this.setStatements_(!0);
        this.statementConnection_ = null
    },
    setStatements_: function(a) {
        this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ = a)
    },
    updateParams_: function() {
        for (var a = !1,
        b = {},
        c = 0; c < this.arguments_.length; c++) {
            if (b["arg_" + this.arguments_[c].toLowerCase()]) {
                a = !0;
                break
            }
            b["arg_" + this.arguments_[c].toLowerCase()] = !0
        }
        a ? this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING) : this.setWarningText(null);
        a = "";
        this.arguments_.length && (a = Blockly.Msg.PROCEDURES_BEFORE_PARAMS + " " + this.arguments_.join(", "));
        this.setFieldValue(a, "PARAMS")
    },
    mutationToDom: function() {
        for (var a = document.createElement("mutation"), b = 0; b < this.arguments_.length; b++) {
            var c = document.createElement("arg");
            c.setAttribute("name", this.arguments_[b]);
            a.appendChild(c)
        }
        this.hasStatements_ || a.setAttribute("statements", "false");
        return a
    },
    domToMutation: function(a) {
        this.arguments_ = [];
        for (var b = 0,
        c; c = a.childNodes[b]; b++)"arg" == c.nodeName.toLowerCase() && this.arguments_.push(c.getAttribute("name"));
        this.updateParams_();
        this.setStatements_("false" !== a.getAttribute("statements"))
    },
    decompose: function(a) {
        var b = Blockly.Block.obtain(a, "procedures_mutatorcontainer");
        b.initSvg();
        this.getInput("RETURN") ? b.setFieldValue(this.hasStatements_ ? "TRUE": "FALSE", "STATEMENTS") : b.getInput("STATEMENT_INPUT").setVisible(!1);

        for (var c = b.getInput("STACK").connection, d = 0; d < this.arguments_.length; d++) {
            var e = Blockly.Block.obtain(a, "procedures_mutatorarg");
            e.initSvg();
            e.setFieldValue(this.arguments_[d], "NAME");
            e.oldLocation = d;
            c.connect(e.previousConnection);
            c = e.nextConnection
        }
        Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.workspace, this.arguments_, null);
        return b
    },
    compose: function(a) {
        this.arguments_ = [];
        this.paramIds_ = [];
        for (var b = a.getInputTargetBlock("STACK"); b;) this.arguments_.push(b.getFieldValue("NAME")),
        this.paramIds_.push(b.id),
        b = b.nextConnection && b.nextConnection.targetBlock();
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this.getFieldValue("NAME"), this.workspace, this.arguments_, this.paramIds_);
        a = a.getFieldValue("STATEMENTS");
        if (null !== a && (a = "TRUE" == a, this.hasStatements_ != a)) if (a) this.setStatements_(!0),
        a = this.getInput("STACK").connection,
        a.targetConnection || !this.statementConnection_ || this.statementConnection_.targetConnection || this.statementConnection_.sourceBlock_.workspace != this.workspace ? this.statementConnection_ = null: a.connect(this.statementConnection_);
        else {
            a = this.getInput("STACK").connection;
            if (this.statementConnection_ = a.targetConnection) a = a.targetBlock(),
            a.setParent(null),
            a.bumpNeighbours_();
            this.setStatements_(!1)
        }
    },
    dispose: function() {
        var a = this.getFieldValue("NAME");
        Blockly.Procedures.disposeCallers(a, this.workspace);
        this.constructor.prototype.dispose.apply(this, arguments)
    },
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !1]
    },
    getVars: function() {
        return this.arguments_
    },
    renameVar: function(a, b) {
        for (var c = !1,
        d = 0; d < this.arguments_.length; d++) Blockly.Names.equals(a, this.arguments_[d]) && (this.arguments_[d] = b, c = !0);
        if (c && (this.updateParams_(), this.mutator.isVisible())) for (var c = this.mutator.workspace_.getAllBlocks(), d = 0, e; e = c[d]; d++)"procedures_mutatorarg" == e.type && Blockly.Names.equals(a, e.getFieldValue("NAME")) && e.setFieldValue(b, "NAME")
    },
    customContextMenu: function(a) {
        var b = {
            enabled: !0
        },
        c = this.getFieldValue("NAME");
        b.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace("%1", c);
        var d = goog.dom.createDom("mutation");
        d.setAttribute("name", c);
        for (var e = 0; e < this.arguments_.length; e++) c = goog.dom.createDom("arg"),
        c.setAttribute("name", this.arguments_[e]),
        d.appendChild(c);
        d = goog.dom.createDom("block", null, d);
        d.setAttribute("type", this.callType_);
        b.callback = Blockly.ContextMenu.callbackFactory(this, d);
        a.push(b);
        if (!this.isCollapsed()) for (e = 0; e < this.arguments_.length; e++) b = {
            enabled: !0
        },
        c = this.arguments_[e],
        b.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace("%1", c),
        d = goog.dom.createDom("field", null, c),
        d.setAttribute("name", "VAR"),
        d = goog.dom.createDom("block", null, d),
        d.setAttribute("type", "variables_get"),
        b.callback = Blockly.ContextMenu.callbackFactory(this, d),
        a.push(b)
    },
    callType_: "procedures_callnoreturn"
};

Blockly.Blocks.procedures_defreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
        this.setColour(Blockly.Blocks.procedures.HUE);
        var a = Blockly.Procedures.findLegalName(Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this),
        a = new Blockly.FieldTextInput(a, Blockly.Procedures.rename);
        a.setSpellcheck(!1);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE).appendField(a, "NAME").appendField("", "PARAMS");
        this.appendValueInput("RETURN").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN).setCheck(["Number", "Boolean"]);
        this.setMutator(new Blockly.Mutator(["procedures_mutatorarg"]));
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
        this.arguments_ = [];
        this.setStatements_(!0);
        this.statementConnection_ = null
    },
    setStatements_: Blockly.Blocks.procedures_defnoreturn.setStatements_,
    updateParams_: Blockly.Blocks.procedures_defnoreturn.updateParams_,
    mutationToDom: Blockly.Blocks.procedures_defnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_defnoreturn.domToMutation,
    decompose: Blockly.Blocks.procedures_defnoreturn.decompose,
    compose: Blockly.Blocks.procedures_defnoreturn.compose,
    dispose: Blockly.Blocks.procedures_defnoreturn.dispose,
    getProcedureDef: function() {
        return [this.getFieldValue("NAME"), this.arguments_, !0]
    },
    getVars: Blockly.Blocks.procedures_defnoreturn.getVars,
    renameVar: Blockly.Blocks.procedures_defnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_defnoreturn.customContextMenu,
    callType_: "procedures_callreturn"
};

Blockly.Blocks.procedures_mutatorcontainer = {
    init: function() {
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput("STACK");
        this.appendDummyInput("STATEMENT_INPUT").appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS).appendField(new Blockly.FieldCheckbox("TRUE"), "STATEMENTS");
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};

Blockly.Blocks.procedures_mutatorarg = {
    init: function() {
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE).appendField(new Blockly.FieldTextInput("x", this.validator_), "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = !1
    },
    validator_: function(a) {
        return (a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "")) || null
    }
};

Blockly.Blocks.procedures_callnoreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.appendDummyInput("TOPROW").appendField(Blockly.Msg.PROCEDURES_CALLNORETURN_CALL).appendField("", "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkArguments_ = null
    },
    getProcedureCall: function() {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function(a, b) {
        Blockly.Names.equals(a, this.getProcedureCall()) && (this.setFieldValue(b, "NAME"), this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP: Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b)))
    },
    setProcedureParameters: function(a, b) {
        if (b) if (goog.array.equals(this.arguments_, a)) this.quarkArguments_ = b;
        else {
            this.setCollapsed(!1);
            if (b.length != a.length) throw "Error: paramNames and paramIds must be the same length.";
            this.quarkArguments_ || (this.quarkConnections_ = {},
            a.join("\n") == this.arguments_.join("\n") ? this.quarkArguments_ = b: this.quarkArguments_ = []);
            var c = this.rendered;
            this.rendered = !1;
            for (var d = this.arguments_.length - 1; 0 <= d; d--) {
                var e = this.getInput("ARG" + d);
                if (e) {
                    var f = e.connection.targetConnection;
                    this.quarkConnections_[this.quarkArguments_[d]] = f;
                    this.removeInput("ARG" + d)
                }
            }
            this.arguments_ = [].concat(a);
            this.renderArgs_();
            if (this.quarkArguments_ = b) for (d = 0; d < this.arguments_.length; d++) {
                var e = this.getInput("ARG" + d),
                g = this.quarkArguments_[d];
                g in this.quarkConnections_ && (f = this.quarkConnections_[g], !f || f.targetConnection || f.sourceBlock_.workspace != this.workspace ? delete this.quarkConnections_[g] : e.connection.connect(f))
            } (this.rendered = c) && this.render()
        } else this.quarkConnections_ = {},
        this.quarkArguments_ = null
    },
    renderArgs_: function() {
        for (var a = 0; a < this.arguments_.length; a++) {
            var b = this.appendValueInput("ARG" + a).setAlign(Blockly.ALIGN_RIGHT).appendField(this.arguments_[a]);
            b.init()
        }
        if (b = this.getInput("TOPROW")) this.arguments_.length ? this.getField("WITH") || (b.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), b.init()) : this.getField("WITH") && b.removeField("WITH")
    },
    mutationToDom: function() {
        var a = document.createElement("mutation");
        a.setAttribute("name", this.getProcedureCall());
        for (var b = 0; b < this.arguments_.length; b++) {
            var c = document.createElement("arg");
            c.setAttribute("name", this.arguments_[b]);
            a.appendChild(c)
        }
        return a
    },
    domToMutation: function(a) {
        var b = a.getAttribute("name");
        this.setFieldValue(b, "NAME");
        this.setTooltip((this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP: Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP).replace("%1", b));
        if ((b = Blockly.Procedures.getDefinition(b, this.workspace)) && b.mutator && b.mutator.isVisible()) this.setProcedureParameters(b.arguments_, b.paramIds_);
        else {
            for (var b = [], c = 0, d; d = a.childNodes[c]; c++)"arg" == d.nodeName.toLowerCase() && b.push(d.getAttribute("name"));
            this.setProcedureParameters(b, b)
        }
    },
    renameVar: function(a, b) {
        for (var c = 0; c < this.arguments_.length; c++) Blockly.Names.equals(a, this.arguments_[c]) && (this.arguments_[c] = b, this.getInput("ARG" + c).fieldRow[0].setText(b))
    },
    customContextMenu: function(a) {
        var b = {
            enabled: !0
        };
        b.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        var c = this.getProcedureCall(),
        d = this.workspace;
        b.callback = function() {
            var a = Blockly.Procedures.getDefinition(c, d);
            a && a.select()
        };
        a.push(b)
    }
};

Blockly.Blocks.procedures_callreturn = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.appendDummyInput("TOPROW").appendField(Blockly.Msg.PROCEDURES_CALLRETURN_CALL).appendField("", "NAME");
        this.setOutput(!0);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkArguments_ = null
    },
    getProcedureCall: Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
    renameProcedure: Blockly.Blocks.procedures_callnoreturn.renameProcedure,
    setProcedureParameters: Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
    renderArgs_: Blockly.Blocks.procedures_callnoreturn.renderArgs_,
    mutationToDom: Blockly.Blocks.procedures_callnoreturn.mutationToDom,
    domToMutation: Blockly.Blocks.procedures_callnoreturn.domToMutation,
    renameVar: Blockly.Blocks.procedures_callnoreturn.renameVar,
    customContextMenu: Blockly.Blocks.procedures_callnoreturn.customContextMenu
};

Blockly.Blocks.procedures_ifreturn = {
    init: function() {
        this.setHelpUrl("http://c2.com/cgi/wiki?GuardClause");
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.appendValueInput("CONDITION").setCheck("Boolean").appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(!0);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.hasReturnValue_ = !0
    },
    mutationToDom: function() {
        var a = document.createElement("mutation");
        a.setAttribute("value", Number(this.hasReturnValue_));
        return a
    },
    domToMutation: function(a) {
        this.hasReturnValue_ = 1 == a.getAttribute("value");
        this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN))
    },
    onchange: function() {
        var a = !1,
        b = this;
        do {
            if ("procedures_defnoreturn" == b.type || "procedures_defreturn" == b.type) {
                a = !0;
                break
            }
            b = b.getSurroundParent()
        } while ( b );
        a ? ("procedures_defnoreturn" == b.type && this.hasReturnValue_ ? (this.removeInput("VALUE"), this.appendDummyInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !1) : "procedures_defreturn" != b.type || this.hasReturnValue_ || (this.removeInput("VALUE"), this.appendValueInput("VALUE").appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN), this.hasReturnValue_ = !0), this.setWarningText(null)) : this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING)
    }
};

//Blockls Control
Blockly.c.procedures = {};

Blockly.c.procedures_defreturn = function() {
    var a = Blockly.c.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE),
    b = Blockly.c.statementToCode(this, "STACK");
    Blockly.c.INFINITE_LOOP_TRAP && (b = Blockly.c.INFINITE_LOOP_TRAP.replace(/%1/g, "'" + this.id + "'") + b);
    var c = Blockly.c.valueToCode(this, "RETURN", Blockly.c.ORDER_NONE) || "";
    c && (c = "  return " + c + ";\n");
    for (var d = c ? "int": "void", e = [], f = 0; f < this.arguments_.length; f++) e[f] = "int " + Blockly.c.variableDB_.getName(this.arguments_[f], Blockly.Variables.NAME_TYPE);
    b = d + " " + a + "(" + e.join(", ") + ") {\n" + b + c + "}\n";
    b = Blockly.c.scrub_(this, b);
    Blockly.c.definitions_[a] = b;
    return null
};
Blockly.c.procedures_defnoreturn = Blockly.c.procedures_defreturn;

Blockly.c.procedures_callreturn = function() {
    for (var a = Blockly.c.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), b = [], c = 0; c < this.arguments_.length; c++) b[c] = Blockly.c.valueToCode(this, "ARG" + c, Blockly.c.ORDER_NONE) || "null";
    return [a + "(" + b.join(", ") + ")", Blockly.c.ORDER_UNARY_POSTFIX]
};

Blockly.c.procedures_callnoreturn = function() {
    for (var a = Blockly.c.variableDB_.getName(this.getFieldValue("NAME"), Blockly.Procedures.NAME_TYPE), b = [], c = 0; c < this.arguments_.length; c++) b[c] = Blockly.c.valueToCode(this, "ARG" + c, Blockly.c.ORDER_NONE) || "null";
    return a + "(" + b.join(", ") + ");\n"
};

Blockly.c.procedures_ifreturn = function() {
    var a = "if (" + (Blockly.c.valueToCode(this, "CONDITION", Blockly.c.ORDER_NONE) || "false") + ") {\n";
    if (this.hasReturnValue_) var b = Blockly.c.valueToCode(this, "VALUE", Blockly.c.ORDER_NONE) || "null",
    a = a + ("  return " + b + ";\n");
    else a += "  return;\n";
    return a + "}\n"
};