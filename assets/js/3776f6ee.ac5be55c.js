"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7052],{3219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(4848),r=i(8453);const t={sidebar_position:3},o="Gesture + RGB Sensor",l={id:"hardware-documentation-and-code-guide/gesture-and-rgb-sensor",title:"Gesture + RGB Sensor",description:"Introduction:",source:"@site/docs/hardware-documentation-and-code-guide/gesture-and-rgb-sensor.md",sourceDirName:"hardware-documentation-and-code-guide",slug:"/hardware-documentation-and-code-guide/gesture-and-rgb-sensor",permalink:"/docs/hardware-documentation-and-code-guide/gesture-and-rgb-sensor",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accelerometer + Gyroscope Sensor",permalink:"/docs/hardware-documentation-and-code-guide/accelerometer-and-gyroscope-sensor"},next:{title:"Barometric Pressure Sensor",permalink:"/docs/hardware-documentation-and-code-guide/barometric-pressure-sensor"}},d={},c=[{value:"Introduction:",id:"introduction",level:2},{value:"What is the APDS-9960?",id:"what-is-the-apds-9960",level:3},{value:"How the APDS-9960 Works:",id:"how-the-apds-9960-works",level:3},{value:"Key Features of APDS-9960:",id:"key-features-of-apds-9960",level:3},{value:"Real-World Applications:",id:"real-world-applications",level:3},{value:"Pinout for APDS-9960 Module:",id:"pinout-for-apds-9960-module",level:3},{value:"Code Guide",id:"code-guide",level:2},{value:"Library Information:",id:"library-information",level:3},{value:"Code Flow:",id:"code-flow",level:3},{value:"Step-by-Step Code Explanation:",id:"step-by-step-code-explanation",level:3},{value:"Available Functions in <code>LightProximityAndGesture.h</code>:",id:"available-functions-in-lightproximityandgestureh",level:2},{value:"Class Creation and Initialization Functions:",id:"class-creation-and-initialization-functions",level:3},{value:"Gesture Detection:",id:"gesture-detection",level:3},{value:"Proximity Detection:",id:"proximity-detection",level:3},{value:"RGB Proportion Measurement:",id:"rgb-proportion-measurement",level:3},{value:"Ambient Light Measurement:",id:"ambient-light-measurement",level:3},{value:"Sensor Control Functions:",id:"sensor-control-functions",level:3},{value:"Advanced Features:",id:"advanced-features",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"gesture--rgb-sensor",children:"Gesture + RGB Sensor"})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction:"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Light, Proximity, and Gesture Sensor Module"})," features the ",(0,s.jsx)(n.strong,{children:"APDS-9960 sensor"}),", a versatile device that integrates ambient light sensing, proximity detection, and gesture recognition capabilities. This sensor is commonly used in applications requiring touchless control and light sensitivity adjustments."]}),"\n",(0,s.jsx)(n.h3,{id:"what-is-the-apds-9960",children:"What is the APDS-9960?"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"APDS-9960"}),", developed by Avago Technologies (now part of Broadcom), offers three main functionalities:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ambient Light Sensing"}),": Measures surrounding light levels."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proximity Sensing"}),": Detects nearby objects."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gesture Recognition"}),": Detects hand movements, like swipes and waves, enabling touchless user interfaces."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-the-apds-9960-works",children:"How the APDS-9960 Works:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Measurement Process"}),": Photodiodes measure light intensity, while infrared signals are used for proximity and gesture detection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Data Output"}),": The sensor uses the ",(0,s.jsx)(n.strong,{children:"I2C protocol"})," to communicate with microcontrollers, such as ESP32."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"key-features-of-apds-9960",children:"Key Features of APDS-9960:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multi-Functional"}),": Ambient light, proximity, and gesture sensing in one sensor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Low Power Consumption"}),": Suitable for battery-powered devices."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"I2C Interface"}),": Easy communication with microcontrollers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Programmable Gain"}),": Allows customization for different sensitivity needs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"real-world-applications",children:"Real-World Applications:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Smartphones/Tablets"}),": For automatic brightness control and gesture-based interfaces."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Home Automation"}),": Gesture control and ambient light adjustment for smart devices."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Robotics"}),": Touchless interaction through gestures."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"pinout-for-apds-9960-module",children:"Pinout for APDS-9960 Module:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"VCC"}),": Power supply (3.3V to 5V)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GND"}),": Ground"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SCL"}),": I2C clock line"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"SDA"}),": I2C data line"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more technical information, refer to the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://docs.broadcom.com/doc/AV02-4191EN",children:"APDS-9960 Datasheet"})}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"code-guide",children:"Code Guide"}),"\n",(0,s.jsx)(n.h3,{id:"library-information",children:"Library Information:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Library Name"}),": ",(0,s.jsx)(n.code,{children:"LightProximityAndGesture.h"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"I2C Address"}),": ",(0,s.jsx)(n.code,{children:"0x39"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"code-flow",children:"Code Flow:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <LightProximityAndGesture.h>\nLightProximityAndGesture sensor;\n\nvoid setup() {\n    Serial.begin(9600);\n    Wire.begin();\n    \n    if (sensor.begin()) {\n        Serial.println("Sensor connected.");\n    } else {\n        Serial.println("Sensor disconnected.");\n    }\n}\n\nvoid loop() {\n    if (sensor.ping()) {\n        // Display sensor data\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"step-by-step-code-explanation",children:"Step-by-Step Code Explanation:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Include the Library"}),": To access the sensor functions, include the relevant library."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Create a Sensor Object"}),": This object will be used for all sensor interactions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Initialize Serial and I2C Communication"}),": Serial communication helps with debugging, while I2C is necessary for sensor communication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Establish a Connection"}),": Verify that the sensor is connected during the ",(0,s.jsx)(n.code,{children:"setup()"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Monitor the Sensor Continuously"}),": In the ",(0,s.jsx)(n.code,{children:"loop()"}),", regularly check for connection and data updates."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.h2,{id:"available-functions-in-lightproximityandgestureh",children:["Available Functions in ",(0,s.jsx)(n.code,{children:"LightProximityAndGesture.h"}),":"]}),"\n",(0,s.jsx)(n.h3,{id:"class-creation-and-initialization-functions",children:"Class Creation and Initialization Functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create an Object of the Class"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"LightProximityAndGesture sensor;\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates an object that allows interaction with the sensor."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Initialize the Sensor"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"bool begin();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Initializes the sensor. Returns ",(0,s.jsx)(n.code,{children:"true"})," if successful."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ping the Sensor"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"bool ping();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Checks if the sensor is still connected. Returns ",(0,s.jsx)(n.code,{children:"true"})," if connected."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"gesture-detection",children:"Gesture Detection:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Detect a Gesture"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"char *getGesture(bool print = true);\n"})}),"\n","Detects a gesture (like swipe left/right or wave). Optionally prints the detected gesture."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"proximity-detection",children:"Proximity Detection:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Proximity Value"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"float getProximity(bool print = true);\n"})}),"\n","Returns a value between 1 (no object nearby) and 255 (object very close)."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"rgb-proportion-measurement",children:"RGB Proportion Measurement:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get RGB Proportion"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"uint16_t *getRGBProportion(bool print = true);\n"})}),"\n","Measures the proportion of red, green, and blue light in the ambient light."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"ambient-light-measurement",children:"Ambient Light Measurement:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Ambient Light Level"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"uint16_t getAmbientLight(bool print = true);\n"})}),"\n","Returns the level of ambient light in ",(0,s.jsx)(n.strong,{children:"lux"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"sensor-control-functions",children:"Sensor Control Functions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enable/Disable Sensors"}),":","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"bool enableAmbientLightSensor(STATE_t interrupt = DISABLE);\nbool enableProximitySensor();\nbool enableGestureSensor();\nbool disableAmbientLightSensor();\nbool disableProximitySensor();\nbool disableGestureSensor();\n"})}),"\n","These functions enable or disable specific sensors (ambient light, proximity, gesture)."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"advanced-features",children:"Advanced Features:"}),"\n",(0,s.jsxs)(n.p,{children:["The library includes advanced functionality like ",(0,s.jsx)(n.strong,{children:"calibration"})," and ",(0,s.jsx)(n.strong,{children:"interrupt control"}),", allowing fine-tuning of the sensor for more accurate measurements."]}),"\n",(0,s.jsxs)(n.p,{children:["For example codes, you can check out ",(0,s.jsx)(n.strong,{children:"File -> Examples -> Gesture_Demo"})," in the Arduino IDE."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"This sensor is ideal for creating interactive projects that involve touchless control or automatically adjusting the environment based on light or gesture input."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);