terningen = 0
Sum = 0
Terming2 = 0

def on_button_pressed_a():
    global terningen
    terningen = randint(1, 6)
    basic.show_number(terningen)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global Sum
    Sum = terningen * Terming2
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    global Terming2
    Terming2 = randint(1, 6)
    basic.show_number(Terming2)
input.on_button_pressed(Button.B, on_button_pressed_b)
