---
sidebar_position: 3
---

# Gesture + RGB Sensor

## Introduction:
The **Light, Proximity, and Gesture Sensor Module** features the **APDS-9960 sensor**, a versatile device that integrates ambient light sensing, proximity detection, and gesture recognition capabilities. This sensor is commonly used in applications requiring touchless control and light sensitivity adjustments.

### What is the APDS-9960?
The **APDS-9960**, developed by Avago Technologies (now part of Broadcom), offers three main functionalities:
- **Ambient Light Sensing**: Measures surrounding light levels.
- **Proximity Sensing**: Detects nearby objects.
- **Gesture Recognition**: Detects hand movements, like swipes and waves, enabling touchless user interfaces.

### How the APDS-9960 Works:
- **Measurement Process**: Photodiodes measure light intensity, while infrared signals are used for proximity and gesture detection.
- **Data Output**: The sensor uses the **I2C protocol** to communicate with microcontrollers, such as ESP32.

### Key Features of APDS-9960:
- **Multi-Functional**: Ambient light, proximity, and gesture sensing in one sensor.
- **Low Power Consumption**: Suitable for battery-powered devices.
- **I2C Interface**: Easy communication with microcontrollers.
- **Programmable Gain**: Allows customization for different sensitivity needs.

### Real-World Applications:
- **Smartphones/Tablets**: For automatic brightness control and gesture-based interfaces.
- **Home Automation**: Gesture control and ambient light adjustment for smart devices.
- **Robotics**: Touchless interaction through gestures.

### Pinout for APDS-9960 Module:
- **VCC**: Power supply (3.3V to 5V)
- **GND**: Ground
- **SCL**: I2C clock line
- **SDA**: I2C data line

For more technical information, refer to the **[APDS-9960 Datasheet](https://docs.broadcom.com/doc/AV02-4191EN)**.

---

## Code Guide

### Library Information:
- **Library Name**: `LightProximityAndGesture.h`
- **I2C Address**: `0x39`

---

### Code Flow:

```cpp
#include <LightProximityAndGesture.h>
LightProximityAndGesture sensor;

void setup() {
    Serial.begin(9600);
    Wire.begin();
    
    if (sensor.begin()) {
        Serial.println("Sensor connected.");
    } else {
        Serial.println("Sensor disconnected.");
    }
}

void loop() {
    if (sensor.ping()) {
        // Display sensor data
    }
}
```

### Step-by-Step Code Explanation:
1. **Include the Library**: To access the sensor functions, include the relevant library.
2. **Create a Sensor Object**: This object will be used for all sensor interactions.
3. **Initialize Serial and I2C Communication**: Serial communication helps with debugging, while I2C is necessary for sensor communication.
4. **Establish a Connection**: Verify that the sensor is connected during the `setup()`.
5. **Monitor the Sensor Continuously**: In the `loop()`, regularly check for connection and data updates.

---

## Available Functions in `LightProximityAndGesture.h`:

### Class Creation and Initialization Functions:

- **Create an Object of the Class**:
  ```cpp
  LightProximityAndGesture sensor;
  ```
  This creates an object that allows interaction with the sensor.

- **Initialize the Sensor**:
  ```cpp
  bool begin();
  ```
  Initializes the sensor. Returns `true` if successful.

- **Ping the Sensor**:
  ```cpp
  bool ping();
  ```
  Checks if the sensor is still connected. Returns `true` if connected.

---

### Gesture Detection:

- **Detect a Gesture**:
  ```cpp
  char *getGesture(bool print = true);
  ```
  Detects a gesture (like swipe left/right or wave). Optionally prints the detected gesture.

---

### Proximity Detection:

- **Get Proximity Value**:
  ```cpp
  float getProximity(bool print = true);
  ```
  Returns a value between 1 (no object nearby) and 255 (object very close).

---

### RGB Proportion Measurement:

- **Get RGB Proportion**:
  ```cpp
  uint16_t *getRGBProportion(bool print = true);
  ```
  Measures the proportion of red, green, and blue light in the ambient light.

---

### Ambient Light Measurement:

- **Get Ambient Light Level**:
  ```cpp
  uint16_t getAmbientLight(bool print = true);
  ```
  Returns the level of ambient light in **lux**.

---

### Sensor Control Functions:

- **Enable/Disable Sensors**:
  ```cpp
  bool enableAmbientLightSensor(STATE_t interrupt = DISABLE);
  bool enableProximitySensor();
  bool enableGestureSensor();
  bool disableAmbientLightSensor();
  bool disableProximitySensor();
  bool disableGestureSensor();
  ```
  These functions enable or disable specific sensors (ambient light, proximity, gesture).

---

### Advanced Features:
The library includes advanced functionality like **calibration** and **interrupt control**, allowing fine-tuning of the sensor for more accurate measurements.

For example codes, you can check out **File -> Examples -> Gesture_Demo** in the Arduino IDE.

--- 

This sensor is ideal for creating interactive projects that involve touchless control or automatically adjusting the environment based on light or gesture input.