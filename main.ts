input.onButtonPressed(Button.A, function () {
    basic.showString("Katarína")
    basic.showString("pani")
    basic.showString("Kvietočková")
    music.playMelody("- - A A C5 G C5 A ", 120)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Oskar!")
    basic.showString("pán")
    basic.showString("Kvietocek")
    music.playMelody("- - B A B C5 E C ", 120)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showIcon(IconNames.TShirt)
})
basic.forever(function () {
	
})
