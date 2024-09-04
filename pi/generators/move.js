Blockly.Python['car_run'] = function (block) {
    var direction = block.getFieldValue('DIRECTION');
    var speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_ATOMIC);
    var time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    if (direction === 'forward') {
        code = 'car_run(' + speed + ',' + speed + ',' + speed + ',' + speed + ',' + time + ')\n';
    } else if (direction === 'backward') {
        code = 'car_run(-' + speed + ',-' + speed + ',-' + speed + ',-' + speed + ',' + time + ')\n';
    } else if (direction === 'left') {
        code = 'car_run(-' + speed + ',' + speed + ',-' + speed + ',' + speed + ',' + time + ')\n';
    } else if (direction === 'right') {
        code = 'car_run(' + speed + ',-' + speed + ',' + speed + ',-' + speed + ',' + time + ')\n';
    } else if (direction === 'left_shift') {
        code = 'car_run(-' + speed + ',' + speed + ',' + speed + ',-' + speed + ',' + time + ')\n';
    } else if (direction === 'right_shift') {
        code = 'car_run(' + speed + ',-' + speed + ',-' + speed + ',' + speed + ',' + time + ')\n';
    }
    return code;
};
Blockly.Python['car_stop'] = function (block) {
    return "myUart.uart_send_str('#006P1500T1000!#007P1500T1000!#008P1500T1000!#009P1500T1000!')\n";
};


Blockly.Python['setup_uart_block'] = function (block) {
    Blockly.Python.definitions_['import_serial'] = 'import serial\nimport time\nimport threading\nimport ZL_SDK.Z_UartServer as myUart';

    var baud_rate = block.getFieldValue('BAUD');

    var code = `

myUart.setup_uart(${baud_rate})

def car_run(speed_l1,speed_r1,speed_l2,speed_r2,time):
    textSrt = '#006P{0:0>4d}T{4:0>4d}!#007P{1:0>4d}T{4:0>4d}!#008P{2:0>4d}T{4:0>4d}!#009P{3:0>4d}T{4:0>4d}!'.format(1500+speed_l1,1500-speed_r1,1500+speed_l2,1500-speed_r2,time)
    print(textSrt)                                                                                                                                                                                                                                                                                                        
    myUart.uart_send_str(textSrt)
`;

    return code;
};
