import serial
import pyautogui


ser = serial.Serial('COM3', 9600) 

while True:
    line = ser.readline().decode('utf-8').strip()
    if line:
        try:
            flow_x, flow_y = map(int, line.split(','))
            pyautogui.moveRel(flow_x, flow_y)
        except ValueError:
            continue
