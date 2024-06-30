#include <SoftwareSerial.h>

SoftwareSerial mySerial(0, 1); // RX, TX

void setup() {
  Serial.begin(9600);
  mySerial.begin(19200);
  delay(100);
}

void loop() {
  if (mySerial.available() >= 9) {
    if (mySerial.read() == 0xFE && mySerial.read() == 0x04) {
      uint8_t data0 = mySerial.read();
      uint8_t data1 = mySerial.read();
      uint8_t data2 = mySerial.read();
      uint8_t data3 = mySerial.read();
      uint8_t sum = mySerial.read();
      uint8_t groundQuality = mySerial.read();
      uint8_t packetEnd = mySerial.read();

      if (packetEnd == 0xAA) {
        if (sum == (data0 + data1 + data2 + data3)) {
          int16_t flow_x = (int16_t)((data1 << 8) | data0);
          int16_t flow_y = (int16_t)((data3 << 8) | data2);
          
          // Serial.print(flow_x);
          // Serial.print(",");
          Serial.println(flow_x+","+flow_y);
        }
      }
    }
  }
}
