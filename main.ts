let terningen = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        terningen = randint(1, 6)
        basic.showNumber(terningen)
    }
    if (terningen == 6) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # .
            # . . . #
            . # # # .
            `)
    }
    if (terningen == 5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            . . . . #
            # # # # .
            `)
    }
    if (terningen == 4) {
        basic.showLeds(`
            . . # # .
            . # . # .
            # . . # .
            # # # # #
            . . . # .
            `)
    }
    if (terningen == 3) {
        basic.showLeds(`
            # # # # .
            . . . # .
            . . # . .
            # . . # .
            . # # . .
            `)
    }
    if (terningen == 2) {
        basic.showLeds(`
            # # # . .
            . . . # .
            . # # . .
            # . . . .
            # # # # .
            `)
    }
    if (terningen == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    }
})
