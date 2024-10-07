---
sidebar_position: 8
---

# Actuator

## Introduction:
The actuator module is designed to interact with external devices through a GPIO expander using the I2C protocol. It includes a TRIAC for controlling AC loads and a buzzer for sound alerts, making it a versatile component for controlling devices and signaling in projects.

### Components:

#### I2C GPIO Expander:
- A GPIO (General Purpose Input/Output) expander increases the number of input/output pins available to your microcontroller via the I2C communication protocol.
- This allows you to control more devices (such as relays, sensors, or actuators) without being limited by the available pins on the ESP32.

#### TRIAC (Triode for Alternating Current):
- A TRIAC is a semiconductor device used to control power to AC loads. It can switch electrical currents in both directions, making it suitable for controlling AC devices like lights, motors, and heaters.
- It is often used for dimming lights or controlling the speed of motors.

#### Buzzer:
- A buzzer is a simple sound-emitting component that can be used to signal or alert users. It is commonly employed in alarms, notifications, or status indicators.
- The buzzer can be driven through the GPIO expander, allowing it to be triggered when needed.

### How the Custom Actuator Works:

#### I2C Communication:
- The GPIO expander communicates with the microcontroller (ESP32) using the I2C protocol. This simplifies the wiring and allows multiple devices to be controlled with fewer pins.
- Commands are sent from the ESP32 to control both the TRIAC and the buzzer via the expander.

#### TRIAC Control:
- The TRIAC allows for the switching of AC loads. When a control signal is sent through the GPIO expander, the TRIAC is activated, turning the connected AC device on or off (or dimming if used in such an application).

#### Buzzer Activation:
- The buzzer is controlled by the GPIO expander and can be activated to emit sound for alerts or notifications in response to conditions in your project.

### Real-World Applications:
- **Home Automation**: Can be used to control household appliances like lights, fans, or heaters.
- **Alarms**: The buzzer can be used in security or notification systems.
- **Interactive Projects**: This module allows students to explore how to control AC devices and create audible signals, adding more interactivity to their projects.

### Pinout for the Actuator Module:
- **VCC**: Power supply (typically 3.3V to 5V).
- **GND**: Ground.
- **SCL**: Clock line for I2C communication (from the GPIO expander).
- **SDA**: Data line for I2C communication (from the GPIO expander).

---

## Code Guide 

### Library and Sensor Setup

- **Library Name:** `Actuator.h`
- **I2C address of the sensor:** `0x41`

### Code Flow:

```cpp
#include <library>
Create an object of the class

void setup()
{
  // Serial communication and Wire Begin.
  Try setting up the sensor.

  if (sensor connected) {
    // sensor is connected
  } else {
    // sensor is disconnected
  }
}

void loop() {
  if (Ping == Sensor is connected) {
    // display data
  }
}
```

When working with the sensor, it's important to follow a logical sequence in your code to ensure smooth operation. Here's how to approach it step-by-step:

#### Include the Required Library:
The first step is to include the correct library to access the predefined functions for interacting with the sensor.

#### Create a Sensor Object:
Create an object for the sensor to enable communication between your microcontroller and the sensor.

#### Initialize Serial and I2C Communication:
In the `setup()` function, initialize serial communication to debug or display messages. Set up I2C communication so the microcontroller can talk to the sensor.

#### Establish a Connection with the Sensor:
Check if the sensor is connected and respond accordingly (displaying a message or taking an action if it fails to connect).

#### Continuously Monitor the Sensor:
Inside the `loop()`, regularly check if the sensor is still connected. If it is, proceed to fetch and display sensor data.

## Available Functions in `Actuator.h`

The `Actuator` library offers a variety of useful functions to interact with the actuator components in your project.

### Class Creation and Initialization Functions:
These functions are foundational and should be used when setting up the actuator.

- **Create an Object of the Class**: 
  ```cpp
  Actuator();
  ```
  Explanation: This function is called when an object of the class Actuator is created, allowing you to initialize the actuator for operation.

- **Ping the Actuator**:
  ```cpp
  bool ping();
  ```
  Explanation: This function performs the necessary setup for the actuator. It returns true if the actuator is successfully connected; otherwise, it returns false. Call this in your `setup()` function to ensure the actuator is ready.

### Pin Configuration Functions:
- **Get Pin Mode**:
  ```cpp
  PIN_MODE_t getMode(PCA_PIN_t pin);
  ```
  Explanation: This function returns the mode configured for the specified pin. Each pin can be configured as either Input or Output.

- **Get Pin State**:
  ```cpp
  PIN_STATE_t getState(PCA_PIN_t pin);
  ```
  Explanation: This function returns the current state of the specified pin. Each pin can either be HIGH or LOW.

### Pin Control Functions:
- **Set Pin Mode**:
  ```cpp
  void setMode(PCA_PIN_t pin, PIN_MODE_t newMode);
  ```
  Explanation: This function sets the desired mode for the specified pin. For example, `setMode(0, IO_OUTPUT)` configures pin 0 for OUTPUT mode.

- **Set Pin State**:
  ```cpp
  void setState(PCA_PIN_t pin, PIN_STATE_t newState);
  ```
  Explanation: This function sets the desired state for the specified pin. For instance, `setState(0, IO_HIGH)` sets pin 0 to HIGH.

## Advanced Features:
The library also includes several advanced functions, as well as private functions, which are detailed in the library documentation.

You can also find the example code in Arduino IDE by going to `File -> Examples -> Actuator_Demo`.