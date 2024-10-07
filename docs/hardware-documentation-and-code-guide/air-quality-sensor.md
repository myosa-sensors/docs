---
sidebar_position: 6
---

# Air Quality Sensor
 
## Introduction
The Air Quality Sensor Module consists of the CCS811 sensor. This sensor is designed to monitor indoor air quality by measuring the concentration of carbon dioxide (CO₂) and total volatile organic compounds (TVOCs).

### What is the CCS811?
The CCS811 is a digital gas sensor that provides reliable measurements of air quality. It is primarily used to assess the levels of CO₂ and TVOCs, which are important for maintaining good indoor air quality.

- **CO₂ (Carbon Dioxide)**: Elevated levels can indicate poor ventilation, leading to discomfort and reduced cognitive function.
- **TVOCs (Total Volatile Organic Compounds)**: Organic chemicals found in everyday products like paints and cleaning supplies, which can have adverse health effects.

### How the CCS811 Works:
- **Measurement Process**: Uses MEMS technology to detect gas concentrations and requires a short warm-up time for accurate readings.
- **Data Output**: Communicates via I2C, reporting CO₂ in ppm and TVOCs in µg/m³.

### Key Features:
- **Digital Output**: Easy integration with microcontrollers via I2C.
- **Low Power Consumption**: Suitable for battery-powered devices.
- **Built-in Temperature and Humidity Compensation**: Ensures accuracy in varying conditions.
- **Calibration**: Automatic calibration after a period of operation.

### Real-World Applications:
- **Indoor Air Quality Monitoring**: Used in homes, offices, and schools.
- **HVAC Systems**: Optimizes climate control based on air quality.
- **Smart Home Devices**: Integrated into smart systems for automatic monitoring and control.

### Pinout for CCS811 Module:
- **VCC**: Power supply (3.3V to 5V).
- **GND**: Ground.
- **SCL**: Clock line for I2C communication.
- **SDA**: Data line for I2C communication.

Refer to the [CCS811 Datasheet](https://cdn.sparkfun.com/assets/learn_tutorials/1/4/3/CCS811_Datasheet-DS000459.pdf) for detailed specifications.

---

## Code Guide

### Library and Sensor Setup

- **Library Name:** `AirQuality.h`
- **I2C address of the sensor:** `0x5B`


### Code Flow
```cpp
#include <AirQuality.h>  // Include the library
AirQuality sensor;       // Create an object of the class

void setup() {
  Serial.begin(115200);  // Initialize serial communication
  Wire.begin();          // Initialize I2C communication
  if (sensor.begin()) {
    Serial.println("Sensor connected");
  } else {
    Serial.println("Sensor not connected");
  }
}

void loop() {
  if (sensor.ping()) {
    Serial.println("Sensor connected");
    // Display data
  } else {
    Serial.println("Sensor disconnected");
  }
}
```

### Code Breakdown:
1. **Include the Library**: Import the required library for interacting with the sensor.
2. **Create a Sensor Object**: Enable communication between the microcontroller and the sensor.
3. **Initialize Serial and I2C**: Set up communication in the `setup()` function.
4. **Check Sensor Connection**: Ensure the sensor is connected and proceed with actions based on connection status.
5. **Monitor the Sensor**: Continuously check the connection and fetch data in the `loop()`.
 


## Available Functions in `AirQuality.h`
The AirQuality library offers a variety of useful functions to retrieve data and interact with the sensor.

### Class Creation and Initialization Functions
These functions are foundational and should be used when setting up the sensor.

#### Create an Object of the Class:
```cpp
AirQuality();
```

#### Initialize the Sensor:
```cpp
CCS811_STATUS_t begin();
```
This function performs the necessary setup for the sensor and returns a status code indicating if the sensor is connected properly.

### Connection Status Function
This function checks whether the sensor is connected.

#### Ping the Sensor:
```cpp
bool ping(void);
```
It returns `true` if the sensor is connected; otherwise, it returns `false`. If a disconnection occurs, it also attempts to re-establish the connection.

### Air Quality Measurement Functions
These functions allow you to retrieve air quality measurements, including TVOCs and CO₂ levels.

#### Get TVOC Levels:
```cpp
uint16_t getTVOC();
```
This function returns the total volatile organic compounds (TVOC) level in parts per billion (ppb).

#### Get CO₂ Concentration:
```cpp
uint16_t getCO2();
```
This function returns the carbon dioxide (CO₂) concentration in parts per million (ppm).

#### Get Temperature Readings:
```cpp
float getTemperature();
```
This function returns the temperature in degrees Celsius (°C), which can be used for air quality reading compensation.
 

## Advanced Features
The library also provides advanced functions for sensor calibration and performance optimization. Example code can be found in Arduino IDE under `File -> Examples -> AirQuality_Demo`.
