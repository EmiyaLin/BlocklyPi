Blockly.Python['try_except_block'] = function(block) {
    var try_statements = Blockly.Python.statementToCode(block, 'TRY');
    var except_statements = Blockly.Python.statementToCode(block, 'EXCEPT');
  
    // 生成try-except的Python代码
    var code = 'try:\n' + try_statements + 'except Exception as e:\n' + except_statements;
    return code;
  };
  