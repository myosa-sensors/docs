---
sidebar_position: 1
---


# MYOSA Motherboard

## Introduction

The motherboard of MYOSA is built around the ESP32 microcontroller module, providing robust processing power and wireless connectivity. The board is designed with various features for easy programming, sensor integration, and protection, making it ideal for IoT projects and sensor-based applications.

## Components

### ESP32 WROOM-32E Module

- The ESP32 is a powerful microcontroller with built-in Wi-Fi, Classic Bluetooth, and BLE (Bluetooth Low Energy), making it ideal for IoT projects.
- It includes dual-core processors, multiple GPIOs, and a range of peripherals for various applications.
- [Learn more about ESP32 SoCs, Modules, and DevKits](https://www.espressif.com/en/products/socs/esp32).

### Code Uploading Circuit with TX/RX LEDs

- The board is equipped with a USB-to-serial converter, allowing code uploads via a USB-C port.
- TX (Transmit) and RX (Receive) LEDs indicate when data is being sent or received, providing visual feedback during code uploading.

### Reset and Boot Buttons

- The Reset button allows you to reboot the ESP32 without disconnecting the power.
- The Boot button is used for flashing the ESP32 with new firmware.

### 3.3V Power LED

- A 3.3V power LED indicates that the board is powered on and receiving a stable voltage supply, ensuring correct power for sensors and actuators.

### Programmable Blue LED at GPIO2

- The board features a programmable blue LED connected to GPIO2, controllable through code for debugging, status indication, or as part of the project’s user interface.

### Extra GPIOs via Female Bergstrip Headers

- The board includes extra GPIO pins accessible through female Bergstrip headers for easy connection of additional sensors or peripherals.

### USB-C Port for Code Uploading and Powering

- A USB-C port is provided for both code uploading and powering the board, ensuring reliable and fast communication with your computer.

### Reverse Polarity Protection (Diode)

- Reverse polarity protection via a diode prevents damage from incorrect power connections.

### ESD Protection

- Electrostatic discharge (ESD) protection safeguards sensitive components like the ESP32 from static discharge, ensuring long-term durability.

### I2C Port

- A dedicated I2C port simplifies wiring and ensures efficient communication between the microcontroller and peripherals, such as sensors and an OLED display.

### Real-World Applications

- **IoT Projects:** Wireless connectivity and GPIO options make it ideal for smart home projects, environmental monitoring, and automation.
- **Prototyping:** Extra GPIOs and programmable LEDs are perfect for testing various sensor or actuator configurations.
- **Interactive Projects:** The USB-C interface and programmable features make it great for real-time interactive applications.

### Pinout Summary

- **ESP32 GPIOs:** Accessible via female Bergstrip headers.
- **USB-C Port:** For code uploading and power.
- **I2C Port:** For connecting OLED, sensors, and actuators.
- **Reset and Boot Buttons:** For board management.
- **Blue LED:** Programmable, connected to GPIO2.
- **3.3V Power LED:** Indicates power status.

## Code Guide

### Master Code Explanation

This code is part of the MYOSA (LearnTheEasyWay) initiative, designed to help students understand how to work with an ESP32-based controller, various sensors, an OLED display, and an actuator board.

#### Libraries and Class Creation

```cpp
/* Library Inclusion */
#include <myosa.h>

/* Create Object of MYOSA class */
MYOSA myosa;
```

- **Library Inclusion:** Includes the `myosa.h` library developed for the MYOSA platform to handle sensor and actuator operations.
- **MYOSA Object Creation:** Creates an object `myosa` from the `MYOSA` class to manage the different modules and their data.

#### Global Constants and Variables

```cpp
/* Set the timer to zero */
unsigned long previousMillis = 0;

/* Global Constants */
const long perModuleInterval = 1500;
uint8_t nScreen = 0u;
```

- **previousMillis (Timer):** Tracks the last time the screen was updated.
- **perModuleInterval:** Defines the interval between screen updates (1.5 seconds).
- **nScreen:** Tracks the module currently displayed on the OLED screen.

#### setup() Function

```cpp
void setup() {
  /* Setting up communication */
  Serial.begin(115200);
  Wire.begin();
  Wire.setClock(100000);

  /* Initialize all modules */
  Serial.println(myosa.begin());
}
```

- **Serial and I2C Setup:** Configures communication with sensors using the I2C protocol.
- **Module Initialization:** Initializes all connected sensors and prints the result for debugging.

#### loop() Function

```cpp
void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= perModuleInterval) {
    previousMillis = currentMillis;
    switch (nScreen) {
      case 0u:
        myosa.printAceelAndGyro();
        nScreen = 1u;
        break;
      // Additional cases...
      default:
        nScreen = 0u;
        break;
    }
    myosa.sendBleData();
  }
}
```

- **Time Check (currentMillis):** Checks if the interval has passed, then updates the screen.
- **Switch Statement:** Cycles through different modules, displaying sensor data on the OLED screen.
- **BLE Data Transmission:** Sends sensor data to the mobile app via BLE.

### Key Learning Points

- **Sensor Management:** Learn to initialize, read, and display sensor data using a microcontroller.
- **I2C Communication:** Demonstrates how to establish communication with sensors via the I2C protocol.
- **OLED Display:** Displays multiple data readings on an OLED screen in a timed manner.
- **BLE Data Transmission:** Introduces wireless data transmission via BLE.

The MYOSA kit provides hands-on experience with embedded systems and IoT devices, making it ideal for educational purposes.