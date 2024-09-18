# BlocklyPi beta

#### 项目介绍
本项目是一个基于Blockly的树莓派可视化编程软件,可以通过模块化编程操控树莓派的GPIO，基于Python和RPi.GPIO，HTML，Javascript的在线编辑器


#### 使用说明

**使用该软件请打开`apps/blocklypi/index.html` 文件**

以下功能请按需要配置：

- 进行串口通信时需要先执行sudo apt-get install python-serial安装相应的扩展包

- 使用iic模块时需要开启iic功能并执行sudo apt-get install python-smbus安装相应的扩展包

- LCD1602的驱动库在python_libraries/lcd1602目录下

- OLED的驱动库在python_libraries/ssd1306目录下

- TM1637数码管的驱动库在python_libraries/tm1637目录下

- DHT11温湿度传感器的驱动库在python_libraries/dht11目录下

- BMP180气压/温度传感器的驱动库在python_libraries/bmp180目录下

- ADS1115电压传感器的驱动库在python_libraries/ads1115目录下

- 步进电机的驱动库在python_libraries/stepper目录下


更多说明详见Blockly官方文档

#### 实际使用
拖动积木块可以直接生成python代码，保存运行即可，积木块可保存为xml文件，下次使用时可以从xml文件中读取。
![PIC1](images/pic1.png)
开发说明

原生Blocks编译为python_compressed.js(参见官方的Blockly源码)，树莓派的javascript在pi文件夹下。

分blocks和generators两个文件夹 。参考如下代码:

```
//定义blocks
Blockly.Blocks.XXX = {
    //Some Code...
}
//定义generators
Blockly.Python.XXX=function(){
   //Some Code...
};
```

定义完成后，要在`apps/blocklypi/index.html`文件中添加对应的标签和js文件以加载积木块和生成python代码