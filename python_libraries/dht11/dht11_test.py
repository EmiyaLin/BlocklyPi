import RPi.GPIO as GPIO
import dht11

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

result = dht11.DHT11(pin = 7).read()

if result.is_valid():
    print("Temperature: %-3.1f C" % result.temperature)
    print("Humidity: %-3.1f %%" % result.humidity)
else:
    print("Error: %d" % result.error_code)