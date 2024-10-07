---
sidebar_position: 4
---

# Barometric Pressure Sensor

## Introduction

The **Barometric Pressure Sensor Module** features the **BMP180** sensor, which is widely used for measuring atmospheric pressure and temperature. These measurements are crucial for applications such as weather monitoring and altitude determination.

### What is the BMP180?
The **BMP180** is a digital barometric pressure sensor developed by **Bosch Sensortec**. It offers accurate readings of atmospheric pressure and temperature, which can be leveraged to predict weather changes and calculate altitude.

#### Key Concepts:
- **Barometric Pressure:** The pressure exerted by the atmosphere at any given point. Variations in this pressure can be an indicator of changing weather conditions.
- **Temperature Measurement:** The BMP180 also measures temperature, which aids in more accurate pressure readings through compensation.

### How the BMP180 Works:

#### Measurement Process:
- The sensor uses **piezoresistive technology** to detect variations in pressure.
- It communicates with microcontrollers like the **ESP32** using the **I2C protocol** to send digital outputs.

#### Data Output:
- **Pressure** is reported in **Pascals (Pa)** and can be translated into altitude data.
- **Temperature** is reported in **degrees Celsius (°C)**.

### Key Features of the BMP180:
- **High Accuracy:** The sensor provides an accuracy of ±1 hPa for pressure measurements.
- **Low Power Consumption:** Suitable for battery-operated and portable devices.
- **I2C Digital Interface:** Simplifies integration with most microcontrollers.
- **Temperature Compensation:** Enhances the accuracy of pressure readings by considering temperature changes.

### Real-World Applications:
- **Weather Stations:** Used in monitoring atmospheric conditions in both personal and professional settings.
- **Altitude Measurement:** Applicable in navigation systems, drones, and similar environments.
- **Environmental Monitoring:** Useful for monitoring pressure and temperature in various environmental conditions.

### Pinout for BMP180 Module:
- **VCC:** Power supply (3.3V to 5V).
- **GND:** Ground.
- **SCL:** Clock line for I2C communication.
- **SDA:** Data line for I2C communication.

For detailed technical specifications, refer to the **[BMP180 Datasheet](https://cdn-shop.adafruit.com/datasheets/BST-BMP180-DS000-09.pdf)**.

---

## Code Guide

### Library:
- **Library Name:** `BarometricPressure.h`
- **I2C address:** `0x77u`

### Code Flow:
1. **Include the Required Library:**  
   ```cpp
   #include <BarometricPressure.h>
   ```

2. **Create a Sensor Object:**
   ```cpp
   BarometricPressure sensor;
   ```

3. **Setup:**
   - Initialize serial communication and I2C.
   - Check if the sensor is connected.
   ```cpp
   void setup() {
     Serial.begin(9600);
     Wire.begin();
     
     if (sensor.begin()) {
       Serial.println("Sensor is connected");
     } else {
       Serial.println("Sensor is not connected");
     }
   }
   ```

4. **Main Loop:**
   - Continuously check if the sensor is connected and display data.
   ```cpp
   void loop() {
     if (sensor.ping()) {
       // Fetch and display sensor data
     }
   }
   ```

---

## Available Functions in `BarometricPressure.h`

### Class Creation and Initialization:

#### Create an Object:
```cpp
BarometricPressure(bmp180AccuracyMode_t mode = ULTRA_LOW_POWER);
```
- **Explanation:** Create an object with a specified accuracy mode (e.g., `ULTRA_LOW_POWER`, `STANDARD`, `HIGH_RESOLUTION`, `ULTRA_HIGH_RESOLUTION`).

#### Initialize the Sensor:
```cpp
bool begin();
```
- **Explanation:** Initializes the sensor. Returns `true` if connected, otherwise `false`.

#### Ping the Sensor:
```cpp
bool ping(void);
```
- **Explanation:** Verifies if the sensor is still connected.

---

### Pressure Retrieval Functions:

#### Get Pressure in Pascals:
```cpp
int32_t getPressure(void);
```
- **Explanation:** Returns the current pressure in Pascals.

#### Get Pressure in Kilopascals:
```cpp
float getPressurePascal(bool print = true);
```
- **Explanation:** Returns the current pressure in kiloPascals.

#### Get Pressure in mmHg:
```cpp
float getPressureHg(bool print = true);
```
- **Explanation:** Returns the current pressure in millimeters of mercury (mmHg).

#### Get Pressure in Bars:
```cpp
float getPressureBar(bool print = true);
```
- **Explanation:** Returns the current pressure in bars.

---

### Temperature Retrieval Function:

#### Get Temperature in Celsius:
```cpp
float getTempC(bool print = true);
```
- **Explanation:** Returns the current temperature in degrees Celsius.

---

### Altitude and Sea Level Functions:

#### Get Altitude:
```cpp
float getAltitude(float p0, bool print = true);
```
- **Explanation:** Returns the altitude relative to sea level using the reference pressure `p0` (in Pascals).

#### Get Sea Level Pressure:
```cpp
float getSeaLevelPressure(float altitude, bool print = true);
```
- **Explanation:** Returns the pressure at sea level based on the provided altitude.

---

### Advanced Features
- The library includes additional features for fine-tuning sensor operations and applications. You can find example code in the **Arduino IDE** under **File -> Examples -> BarometricPressure_Demo**.