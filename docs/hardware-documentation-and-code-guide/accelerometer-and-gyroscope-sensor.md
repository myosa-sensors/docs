---
sidebar_position: 2
---

# Accelerometer + Gyroscope Sensor

## Introduction
The Accelerometer + Gyroscope Sensor Module consists of a **MPU6050 sensor**, a popular device that integrates both accelerometer and gyroscope functionalities. It detects motion and orientation in three-dimensional space.

### What is the MPU6050?
The **MPU6050** is a 6-axis motion tracking device from InvenSense, combining a 3-axis accelerometer and a 3-axis gyroscope on a single chip.

- **Accelerometer**: Measures acceleration forces like gravity, allowing you to determine speed and tilt.
- **Gyroscope**: Measures angular velocity, detecting rotation around the X, Y, and Z axes.

This sensor is widely used in robotics, drones, smartphones for gesture recognition, stabilization, orientation detection, and step counting.

### How the MPU6050 Works
 
 **Accelerometer**
- Measures acceleration based on forces like gravity.
- When tilted, the X, Y, and Z values change depending on gravitational force.

**Gyroscope**
- Measures rotational speed.
- Detects the angle at which a device is rotating, useful in systems like drones.

### Key Features of MPU6050
- **6-axis motion sensing**: 3-axis accelerometer + 3-axis gyroscope.
- **DMP (Digital Motion Processor)**: Internal processor for complex motion data.
- **I2C Interface**: Communicates using the I2C protocol.
- **Small and Low Power**: Suitable for portable or battery-powered projects.

### Real-World Applications
- **Drones**: Flight stabilization and orientation control.
- **Smartphones**: Screen rotation and motion-based gaming.
- **Robotics**: Movement and balance understanding.

### Pinout for MPU6050 Module
- **VCC**: Power supply (3.3V to 5V).
- **GND**: Ground.
- **SCL**: Clock line for I2C.
- **SDA**: Data line for I2C.

Check out the **[MPU6050 Datasheet](https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf)** for further technical details.

---

## Code Guide

### Library and Sensor Setup

- **Library Name**: `AccelAndGyro.h`
- **I2C address of the sensor**: `0x69`

### Code Flow
```cpp
#include <AccelAndGyro.h>  // Include the library
AccelAndGyro sensor;       // Create an object of the class

void setup() {
  Serial.begin(115200);    // Start Serial communication
  Wire.begin();            // Start I2C communication
  
  if(sensor.begin()) {
    // Sensor is connected
  } else {
    // Sensor is disconnected
  }
}

void loop() {
  if (sensor.ping()) {
    // Display data
  }
}
```

### Code Explanation
1. **Include Required Library**: Include the `AccelAndGyro.h` library to access sensor functions.
2. **Create Sensor Object**: Initialize the sensor object for communication.
3. **Initialize Communication**: Setup serial and I2C communication in `setup()`.
4. **Check Sensor Connection**: Confirm if the sensor is connected.
5. **Monitor Sensor**: Continuously check the sensor's connection status and display data.

---

## Available Functions in `AccelAndGyro.h`

### Class Creation and Initialization Functions

- **Create an Object of the Class**:
  ```cpp
  AccelAndGyro sensor;
  ```
  Creates an object for the sensor interaction.

- **Initialize the Sensor**:
  ```cpp
  bool begin();
  ```
  Initializes the sensor and returns `true` if successful.

- **Check Connection Status**:
  ```cpp
  bool ping();
  ```
  Checks if the sensor is connected.

---

### Retrieve Sensor Data

#### Acceleration Data
- **Get Acceleration**:
  ```cpp
  float getAccelX(bool print=true);
  float getAccelY(bool print=true);
  float getAccelZ(bool print=true);
  ```
  Retrieves the raw acceleration data for X, Y, and Z axes.

#### Gyroscope Data
- **Get Gyroscope Data**:
  ```cpp
  float getGyroX(bool print=true);
  float getGyroY(bool print=true);
  float getGyroZ(bool print=true);
  ```
  Retrieves raw angular velocity for X, Y, and Z axes.

#### Tilt Data
- **Get Tilt**:
  ```cpp
  float getTiltX(bool print=true);
  float getTiltY(bool print=true);
  float getTiltZ(bool print=true);
  ```
  Retrieves tilt angles for X, Y, and Z axes.

---

### Temperature and Motion Detection

#### Temperature Data
- **Get Temperature**:
  ```cpp
  float getTempC(bool print=true);
  float getTempF(bool print=true);
  ```
  Retrieves the temperature data in Celsius and Fahrenheit.

#### Motion Detection
- **Detect Motion**:
  ```cpp
  bool getMotionStatus(bool print=true);
  ```
  Returns `true` if motion is detected.

---

### Advanced Features
The `AccelAndGyro` library offers advanced calibration functions to fine-tune the sensor for higher precision. You can explore **example codes** in the Arduino IDE under `File -> Examples -> AccelAndGyro_Demo`.