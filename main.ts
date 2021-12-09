/**
 * a=>增加
 * 
 * b=>執行
 */
function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
// 增加亮燈的數量
input.onButtonPressed(Button.A, function () {
    _2 += 1
    basic.showNumber(_2)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// 清空
input.onButtonPressed(Button.AB, function () {
    _2 = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// 使燈亮，並隨機
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < _2) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
})
// 使初始值為0
let a = 0
let list: number[] = []
let y = 0
let x = 0
let n = 0
let _2 = 0
n = 0
_2 = 0
