---
sidebar_position: 7
---

# OLED Display

## Introduction:
The OLED Display Module in your kit consists of the SSD1306 driver. This display is widely used for various applications due to its vibrant colors, excellent contrast, and low power consumption.

### What is the SSD1306?
The SSD1306 is a monochrome OLED (Organic Light Emitting Diode) display driver that supports resolutions of 128x64 pixels. It is commonly used for small displays in embedded systems, providing clear and bright visuals without the need for a backlight.

#### OLED Technology:
Unlike traditional LCDs, OLED displays emit their own light, resulting in deeper blacks and more vivid colors. This also allows for better viewing angles.

### How the SSD1306 Works:
#### Display Control:
- The SSD1306 uses an I2C (or sometimes SPI) interface to communicate with microcontrollers like the ESP32.
- It receives commands and data from the microcontroller to control what is displayed on the screen.

#### Data Output:
- The display is controlled pixel by pixel, allowing for the rendering of text, graphics, and images.
- Data sent to the SSD1306 typically includes pixel data and command sequences to change settings (like brightness or contrast).

### Key Features of SSD1306:
- **High Resolution**: 128x64 pixels provide good clarity for text and graphics.
- **Low Power Consumption**: Ideal for battery-operated applications, as OLEDs consume less power than LCDs when displaying darker images.
- **Wide Viewing Angles**: OLED technology allows for better viewing angles compared to LCDs.
- **Built-in RAM**: Contains memory to store display data, allowing for fast rendering.

### Real-World Applications:
- **Embedded Systems**: Used in various DIY electronics projects for displaying information.
- **Wearables**: Ideal for smartwatches and fitness trackers due to low power requirements.
- **Sensor Readouts**: Commonly used to display sensor data in real-time.

### Pinout for SSD1306 Module:
- **VCC**: Power supply (typically 3.3V to 5V).
- **GND**: Ground.
- **SCL**: Clock line for I2C communication.
- **SDA**: Data line for I2C communication.

### SSD1306 Datasheet:
For detailed specifications and operational guidelines, refer to the [SSD1306 Datasheet](https://cdn-shop.adafruit.com/datasheets/SSD1306.pdf).

---

## Code Guide

### Library and Sensor Setup

- **Library Name:** `oled.h`
- **I2C address of the sensor:** `0x3C`

---

### Code Flow

```cpp
#include <library>
Create an object of the class

void setup()
{
  // Serial communication and Wire Begin.
  // Try setting up the sensor.

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

### Logical Code Sequence:
1. **Include the Required Library**:
   - Include the correct library to access predefined functions for interacting with the sensor.
   
2. **Create a Sensor Object**:
   - Create an object for the sensor to enable communication between your microcontroller and the sensor.

3. **Initialize Serial and I2C Communication**:
   - In the `setup()` function, initialize serial communication for debugging. Set up I2C communication for sensor communication.

4. **Establish a Connection with the Sensor**:
   - Check if the sensor is connected. Respond accordingly (display a message or take action if the connection fails).

5. **Continuously Monitor the Sensor**:
   - In the `loop()`, regularly check if the sensor is still connected. If it is, proceed to fetch and display sensor data.

---

## Available Functions in `oled.h`
The `oled.h` library provides several functions to interact with the OLED display.

### Class Creation and Initialization Functions:
- **Create an Object of the Class**:
  ```cpp
  oLed(uint8_t w, uint8_t h);
  ```
  Explanation: This function creates an object of the class `oLed`. You can specify the width (w) and height (h) of the OLED display.

- **Initialize the Display**:
  ```cpp
  bool begin();
  ```
  Explanation: Initializes the display. Returns `true` if the display is successfully connected, otherwise `false`.

---

### Pixel and Graphics Functions:

- **Draw a Pixel**:
  ```cpp
  void drawPixel(int16_t x, int16_t y, uint16_t color);
  ```
  Explanation: Draws a pixel at the specified (x, y) coordinates with the given color.

### Graphics Functions:
- **drawLine**
- **drawRect**
- **drawCircle**
- **drawTriangle**
- **drawBitmap**
- **drawChar**

Explanation: These functions allow creating various graphics on the OLED display. Refer to the library documentation for detailed usage.

---

### Text Display Functions:
- **Set Cursor Position**:
  ```cpp
  void setCursor(int16_t x, int16_t y);
  ```
  Explanation: Sets the cursor at the specified (x, y) position for displaying text.

- **Set Text Size**:
  ```cpp
  void setTextSize(int _size);
  ```
  Explanation: Sets the text size for the next text buffer.

- **Rotate Display**:
  ```cpp
  void setRotation(int x);
  ```
  Explanation: Rotates the display by 90°. Acceptable values are `0`, `1`, `2`, and `3`.

- **Print Text**:
  ```cpp
  void print();
  ```

- **Display the Buffer**:
  ```cpp
  void display();
  ```
  Explanation: Updates the OLED display with the content stored in the buffer.

- **Clear the Display**:
  ```cpp
  void clearDisplay();
  ```

---

### Advanced Features:
The library also includes advanced functions for specialized applications and enhanced control of the display's features.

### Example Code:
Find example code in the Arduino IDE by navigating to `File -> Examples -> OLED_Demo`.