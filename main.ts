let playerCar: game.LedSprite = null
let SCORE = 0
let gameOn = false
let car0: game.LedSprite = null
let car1: game.LedSprite = null
let car3: game.LedSprite = null
let car2: game.LedSprite = null
let car4: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
})
basic.forever(function () {
    SCORE = 0
    playerCar = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(100)
    }
    game.addScore(SCORE)
    game.gameOver()
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car0 = game.createSprite(0, 0)
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car0.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car0)) {
                gameOn = false
            } else {
                SCORE = SCORE + 1
                car0.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car0.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car1 = game.createSprite(1, 0)
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car1.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car1)) {
                gameOn = false
            } else {
                SCORE = SCORE + 1
                car1.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car1.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car3 = game.createSprite(3, 0)
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car3.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car3)) {
                gameOn = false
            } else {
                SCORE = SCORE + 1
                car3.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car3.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car2 = game.createSprite(2, 0)
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car2.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car2)) {
                gameOn = false
            } else {
                SCORE = SCORE + 1
                car2.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car2.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (gameOn == true) {
        car4 = game.createSprite(4, 0)
    }
    basic.pause(randint(0, 5000))
    while (gameOn == true) {
        if (car4.get(LedSpriteProperty.Y) == 4) {
            if (playerCar.isTouching(car4)) {
                gameOn = false
            } else {
                SCORE = SCORE + 1
                car4.set(LedSpriteProperty.Y, 0)
                basic.pause(randint(0, 5000))
            }
        } else {
            car4.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
    }
})
