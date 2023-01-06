input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Count += 1
    basic.showNumber(Count)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Count = 0
    basic.showNumber(Count)
})
let Count = 0
Count = 0
