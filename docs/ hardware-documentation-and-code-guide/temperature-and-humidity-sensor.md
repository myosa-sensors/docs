---
sidebar_position: 5
---

# Temperature + Humidity Sensor

## Introduction:
The Temperature and Humidity Sensor Module in your kit consists of the SI7021 sensor. This sensor is designed to provide accurate measurements of both temperature and humidity, making it an essential component for environmental monitoring.

### What is the SI7021?
The SI7021 is a digital humidity and temperature sensor manufactured by Silicon Labs. It provides accurate and reliable readings for temperature in degrees Celsius and relative humidity as a percentage.

- **Temperature Measurement:** The SI7021 measures ambient temperature, which is critical for various applications, including climate control and weather monitoring.gg
- **Humidity Measurement:** It measures relative humidity, helping to assess the moisture content in the air, which can affect comfort levels and equipment performance.

### How the SI7021 Works:

#### Measurement Process:
- The sensor uses capacitive sensing technology for humidity measurement and a bandgap temperature sensor for temperature measurement.
- It communicates with microcontrollers (like ESP32) via the I2C protocol, providing digital outputs.

#### Data Output:
- The SI7021 outputs temperature readings in degrees Celsius (°C) and relative humidity readings in percentage (% RH).

### Key Features of SI7021:
- **High Accuracy:** Offers temperature accuracy of ±0.4°C and humidity accuracy of ±3% RH.
- **Low Power Consumption:** Designed for low-power applications, making it suitable for battery-operated devices.
- **I2C Interface:** Easy integration with microcontrollers.
- **Small Package Size:** Compact design suitable for space-constrained applications.

### Real-World Applications:
- **Weather Stations:** Used in personal and professional weather stations to monitor environmental conditions.
- **HVAC Systems:** Helps in managing heating, ventilation, and air conditioning systems by monitoring indoor climate.
- **Greenhouses:** Assists in optimizing plant growth conditions by providing accurate climate data.

### Pinout for SI7021 Module:
- **VCC:** Power supply (typically 3.3V to 5V).
- **GND:** Ground.
- **SCL:** Clock line for I2C communication.
- **SDA:** Data line for I2C communication.

### SI7021 Datasheet:
For detailed specifications and operational guidelines, refer to the [SI7021 Datasheet](https://cdn.sparkfun.com/assets/b/1/b/8/5/Si7021-A20.pdf).

---

## Code Guide

### Library and Sensor Setup

- **Library Name:** `TempAndHumidity.h`
- **I2C address of the sensor:** `0x40`

### Code Flow

```cpp
#include <library>
Create an object of the class

void setup() {
  // Serial communication and Wire Begin
  Try setting up the sensor.
  
  if (sensor connected) {
    // Sensor is connected
  } else {
    // Sensor is disconnected
  }
}

void loop() {
  if (Ping == Sensor is connected) {
    // Display data
  }
}
```

When working with the sensor, it's important to follow a logical sequence in your code to ensure smooth operation. Here’s how to approach it step-by-step:

#### Include the Required Library:
The first step is to include the correct library to access the predefined functions for interacting with the sensor.

#### Create a Sensor Object:
Create an object for the sensor to enable communication between your microcontroller and the sensor.

#### Initialize Serial and I2C Communication:
In the `setup()` function, initialize serial communication to debug or display messages. Set up I2C communication so the microcontroller can talk to the sensor.

#### Establish a Connection with the Sensor:
Check if the sensor is connected and respond accordingly (displaying a message or taking action if it fails to connect).

#### Continuously Monitor the Sensor:
Inside the `loop()`, regularly check if the sensor is still connected. If it is, proceed to fetch and display sensor data like acceleration, gyroscope readings, or temperature.

## Available Functions in `TempAndHumidity.h`
The `TempAndHumidity` library offers a variety of useful functions to retrieve data and interact with the sensor.

### Class Creation and Initialization Functions:
These functions are foundational and should be used when setting up the sensor.

#### Create an Object of the Class:
```cpp
TempAndHumidity();
```
Explanation: This function is called when an object of the class `TempAndHumidity` is created, allowing you to initialize the sensor for operation.

#### Initialize the Sensor:
```cpp
bool begin(void);
```
Explanation: This function performs the necessary setup for the sensor. It returns `true` if the sensor is successfully connected; otherwise, it returns `false`. Call this in your `setup()` function to ensure the sensor is ready.

### Connection Status Function:
This function checks whether the sensor is connected.

#### Ping the Sensor:
```cpp
bool ping(void);
```
Explanation: This function pings the sensor to check if it is connected. It returns `true` if the sensor is connected; otherwise, it returns `false`. If a disconnection occurs in the loop, this function also calls `begin()` to re-establish the connection.

### Humidity and Temperature Retrieval Functions:
These functions allow you to retrieve humidity and temperature measurements.

#### Get Relative Humidity:
```cpp
float getRelativeHumidity(bool print=true);
```
Explanation: This function returns the relative humidity levels as a percentage. You can use this value to assess moisture levels in the environment.

#### Get Temperature in Celsius:
```cpp
float getTempC(bool print=true);
```
Explanation: This function returns the temperature in degrees Celsius (°C) for the current location.

#### Get Temperature in Fahrenheit:
```cpp
float getTempF(bool print=true);
```
Explanation: This function returns the temperature in degrees Fahrenheit (°F) for the current location.

#### Get Heat Index in Celsius:
```cpp
float getHeatIndexC(bool print=true);
```
Explanation: The heat index (HI) combines air temperature and relative humidity to provide a "felt air temperature." This function returns the heat index value in degrees Celsius (°C), reflecting human-perceived temperature under shaded conditions.

## Advanced Features
The library also includes several advanced functions for specialized applications and enhanced control of the sensor’s features.

You can also find the example code in Arduino IDE by going to **File -> Examples -> TempAndHumidity_Demo**.