Blockly.Blocks.device_dht11={
    init:function(){
        this.setColour(100);
        this.appendValueInput("PIN")
            .appendField("DHT11传感器 管脚#",Number)
            .setCheck("Number");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([["获取当前温度(℃)","Temperature"],["获取当前湿度(%)","Humidity"]]),"MODE");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.device_bmp180={
    init:function(){
        this.setColour(100);
        this.appendValueInput("BUS")
            .appendField("BMP180传感器 总线",Number)
            .setCheck("Number");
        this.appendValueInput("BMP180_ADDR",Number)
            .appendField("设备地址")
            .setCheck("Number");
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown([["获取当前气压(Pa)","Pressure"],["获取当前温度(℃)","Temperature"]]),"MODE");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.device_hcsr04_distance={
    init:function(){
        this.setColour(100);
        this.appendValueInput("TRIG")
            .appendField("HC-SR04超声波测距(cm) Trig#",Number)
            .setCheck("Number");
        this.appendValueInput("ECHO")
            .appendField("Echo#",Number)
            .setCheck("Number");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.device_ads1115={
    init:function(){
        this.setColour(100);
        this.appendValueInput("BUS")
            .appendField("ADS1115电压传感器(V) 总线",Number)
            .setCheck("Number");
        this.appendValueInput("ADS1115_ADDR",Number)
            .appendField("设备地址")
            .setCheck("Number");
        this.appendDummyInput("")
            .appendField("通道")
            .appendField(new Blockly.FieldDropdown([["A0","0"],["A1","1"],["A2","2"],["A3","3"]]),"CHANNEL");
        this.setOutput(true,"Number");
        this.setInputsInline(true);
    }
};

Blockly.Blocks.device_stepper_init={
    init:function(){
        this.setColour(100);
        this.appendDummyInput("")
            .appendField("步进电机 初始化");
        for(let i=1;i<=4;i++){
            this.appendValueInput("PIN"+i)
                .appendField("管脚"+i+"#",Number)
                .setCheck("Number")
                .setAlign(Blockly.ALIGN_RIGHT);
        };
        this.appendValueInput("STEPS")
            .appendField("每转步数",Number)
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setOutput(true);
        this.setInputsInline(false);
    }
};

Blockly.Blocks.device_stepper_speed={
    init:function(){
        this.setColour(100);
        this.appendValueInput("STEPPER_OBJ")
            .appendField("步进电机");
        this.appendValueInput("SPEED")
            .appendField("设置转速",Number)
            .setCheck("Number");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.device_stepper_step={
    init:function(){
        this.setColour(100);
        this.appendValueInput("STEPPER_OBJ")
            .appendField("步进电机");
        this.appendValueInput("STEPS")
            .appendField("移动",Number)
            .setCheck("Number");
        this.appendDummyInput("")
            .appendField("步");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};

Blockly.Blocks.device_beep={
    init:function(){
        this.setColour(100);
        this.appendValueInput("PIN")
            .appendField("播放声音 管脚#",Number)
            .setCheck("Number");
        this.appendValueInput("FREQ")
            .appendField("频率",Number)
            .setCheck("Number");
        this.appendValueInput("TIME")
            .appendField("Hz 持续时间",Number)
            .setCheck("Number");
        this.appendDummyInput("")
            .appendField("秒");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
    }
};