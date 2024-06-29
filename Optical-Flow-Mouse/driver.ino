#include <SoftwareSerial.h>
SoftwareSerial mySerial(0, 1); // RX, TX

void setup() {
  // Start the built-in serial communication to the computer
  Serial.begin(9600);
  
  // Start the software serial communication with the sensor
  mySerial.begin(19200);
}

void loop() {
  // Serial.println("hellooh");
  if (mySerial.available()) {
    // Read data from the sensor and print it to the Serial Monitor
    while (mySerial.available()) {
      char c = mySerial.read();
      Serial.println((int)c);
    }
  }
}
