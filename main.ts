input.onButtonPressed(Button.A, function () {
    basic.showString("Katarína")
    basic.showString("pani")
    basic.showString("Kvietočková")
    music.playMelody("C5 B A G F E D C ", 120)
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
    music.playMelody("C5 B G E D C C C ", 120)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showIcon(IconNames.TShirt)
})
basic.forever(function () {
	
})
