Blockly.Blocks.variables = {};
Blockly.Blocks.variables.HUE = 330;

Blockly.Blocks.variables_get = {
    init: function() {
        this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput().appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLES_DEFAULT_NAME), "VAR");
        this.setOutput(!0);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(a, b) {
        Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR")
    },
    contextMenuType_: "variables_set",
    customContextMenu: function(a) {
        var b = {
            enabled: !0
        },
        c = this.getFieldValue("VAR");
        b.text = this.contextMenuMsg_.replace("%1", c);
        c = goog.dom.createDom("field", null, c);
        c.setAttribute("name", "VAR");
        c = goog.dom.createDom("block", null, c);
        c.setAttribute("type", this.contextMenuType_);
        b.callback = Blockly.ContextMenu.callbackFactory(this, c);
        a.push(b)
    }
};

Blockly.Blocks.variables_set = {
    init: function() {
        this.jsonInit({
            message0: Blockly.Msg.VARIABLES_SET,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: Blockly.Msg.VARIABLES_DEFAULT_NAME
            },
            {
                type: "input_value",
                name: "VALUE"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: Blockly.Blocks.variables.HUE,
            tooltip: Blockly.Msg.VARIABLES_SET_TOOLTIP,
            helpUrl: Blockly.Msg.VARIABLES_SET_HELPURL
        });
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET
    },
    getVars: function() {
        return [this.getFieldValue("VAR")]
    },
    renameVar: function(a, b) {
        Blockly.Names.equals(a, this.getFieldValue("VAR")) && this.setFieldValue(b, "VAR")
    },
    contextMenuType_: "variables_get",
    customContextMenu: Blockly.Blocks.variables_get.customContextMenu
};
//Blocks Control
Blockly.c.variables = {};
Blockly.c.variables_get = function() {
    return [Blockly.c.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE), Blockly.c.ORDER_ATOMIC]
};

Blockly.c.variables_declare = function() {
    this.getFieldValue("TYPE");
    var a = Blockly.c.valueToCode(this, "VALUE", Blockly.c.ORDER_ASSIGNMENT) || "0",
    b = Blockly.c.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE);
    Blockly.c.setups_["setup_var" + b] = b + " = " + a + ";\n";
    return ""
};

Blockly.c.variables_set = function() {
    var a = Blockly.c.valueToCode(this, "VALUE", Blockly.c.ORDER_ASSIGNMENT) || "0";
    return Blockly.c.variableDB_.getName(this.getFieldValue("VAR"), Blockly.Variables.NAME_TYPE) + " = " + a + ";\n"
};