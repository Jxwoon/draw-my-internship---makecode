controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (count > 0) {
        count += -1
        sceneUpdate = true
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (count < 9) {
        count += 1
        sceneUpdate = true
    }
})
function animateCharacter () {
    character.runFrames(
    mySprite,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f e f f f f f . . 
        . . f f f f f e d e f f f f . . 
        . . f f f f e d d d e f f f . . 
        . . f f f b f d d f b e f f . . 
        . . f f d 1 f d d f 1 d f f . . 
        . . f f f d d d d d d f f f . . 
        . f f f f e e e e e e f f f f . 
        . . c b c b 3 3 3 3 b c b c . . 
        . . e d c b b b b b b c d e . . 
        . . e e c c c c c c c c e e . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f e f f f f f . . 
        . . f f f f f e d e f f f f . . 
        . . f f f f e d d d e f f f . . 
        . . f f f b f d d f b e f f . . 
        . . f f d 1 f d d f 1 d f f . . 
        . . f f f d d d d d e e f f . . 
        . f f f f e e e e e d d e f f . 
        . . c b c b 3 3 3 e d d e . . . 
        . . e d c c c c c c e e . . . . 
        . . e e e 6 6 6 6 6 6 6 . . . . 
        . . . . 1 1 1 . . . . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f e f f f f f . . 
        . . f f f f f e d e f f f f . . 
        . . f f f f e d d d e f f f . . 
        . . f f f b f d d f b e f f . . 
        . . f f d 1 f d d f 1 d f f . . 
        . . f f f d d d d d d f f f . . 
        . f f f f e e e e e e f f f f . 
        . . c b c b 3 3 3 3 b c b c . . 
        . . e d c b b b b b b c d e . . 
        . . e e c c c c c c c c e e . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f e f f f f f f . . 
        . . f f f f e d e f f f f f . . 
        . . f f f e d d d e f f f f . . 
        . . f f e b f d d f b f f f . . 
        . . f f d 1 f d d f 1 d f f . . 
        . . f f e e d d d d d f f f . . 
        . f f e d d e e e e e f f f f . 
        . . . e d d e 3 3 3 b c b c . . 
        . . . . e e c c c c c c d e . . 
        . . . . 6 6 6 6 6 6 6 e e e . . 
        . . . . . . . . . 1 1 1 . . . . 
        `],
    50,
    character.rule(Predicate.MovingDown)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f c b c b 3 3 3 3 b c b c f . 
        . . e d c b b b b b b c d e . . 
        . . e e c c c c c c c c e e . . 
        . . . . 6 6 6 6 6 6 6 6 e e . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . . . e c b 3 3 3 3 b e e e . . 
        . . . e c c c c c c e d d e . . 
        . . . e 6 6 6 6 6 6 e e e . . . 
        . . . . 1 1 1 . . . . . . . . . 
        `,img`
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f c b c b 3 3 3 3 b c b c f . 
        . . e d c b b b b b b c d e . . 
        . . e e c c c c c c c c e e . . 
        . . . . 6 6 6 6 6 6 6 6 e e . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . . e e e b 3 3 3 3 b c e . . . 
        . . e d d e c c c c c c e . . . 
        . . . e e e 6 6 6 6 6 6 e . . . 
        . . . . . . . . . 1 1 1 . . . . 
        `],
    50,
    character.rule(Predicate.MovingUp)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f c f f f . . 
        . . . f f f f f b c f f f f . . 
        . . . f f e f f f f f f f f . . 
        . . . f e d e f f f f f f f . . 
        . . . f e d d e f f f f f f . . 
        . . . e d d f b e f f f f f . . 
        . . . e d d f 1 d f f f f f . . 
        . . . e d d d d d f f f f f . . 
        . . f f e e e e e f f f f f f . 
        . . . . c 3 3 b c b b c . . . . 
        . . . . c b b b e d d e . . . . 
        . . . . c c c c e e e e . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f c f f f . . 
        . . . f f f f f b c f f f f . . 
        . . . f f e f f f f f f f f . . 
        . . . f e d e f f f f f f f . . 
        . . . f e d d e f f f f f f . . 
        . . . e d d f b e f f f f f . . 
        . . . e d d f 1 d f f f f f . . 
        . . . e d d d d d f f f f f . . 
        . . f f c e e c b f f f f f f . 
        . . . . c 3 b e d d e c . . . . 
        . . . 1 c c c e e e e c 1 . . . 
        . . . 1 6 6 6 6 6 6 6 6 1 . . . 
        . . . . 1 1 1 . . . 1 1 . . . . 
        `],
    100,
    character.rule(Predicate.MovingLeft)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f c f f f f f f f . . . 
        . . f f f f c b f f f f f . . . 
        . . f f f f f f f f e f f . . . 
        . . f f f f f f f e d e f . . . 
        . . f f f f f f e d d e f . . . 
        . . f f f f f e b f d d e . . . 
        . . f f f f f d 1 f d d e . . . 
        . . f f f f f d d d d d e . . . 
        . f f f f f f e e e e e f f . . 
        . . . . c b b c b 3 3 c . . . . 
        . . . . e d d e b b b c . . . . 
        . . . . e e e e c c c c . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f c f f f f f f f . . . 
        . . f f f f c b f f f f f . . . 
        . . f f f f f f f f e f f . . . 
        . . f f f f f f f e d e f . . . 
        . . f f f f f f e d d e f . . . 
        . . f f f f f e b f d d e . . . 
        . . f f f f f d 1 f d d e . . . 
        . . f f f f f d d d d d e . . . 
        . f f f f f f b c e e c f f . . 
        . . . . c e d d e b 3 c . . . . 
        . . . 1 c e e e e c c c 1 . . . 
        . . . 1 6 6 6 6 6 6 6 6 1 . . . 
        . . . . 1 1 . . . 1 1 1 . . . . 
        `],
    100,
    character.rule(Predicate.MovingRight)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f e f f f f f . . 
        . . f f f f f e d e f f f f . . 
        . . f f f f e d d d e f f f . . 
        . . f f f b f d d f b e f f . . 
        . . f f d 1 f d d f 1 d f f . . 
        . . f f f d d d d d d f f f . . 
        . f f f f e e e e e e f f f f . 
        . . c b c b 3 3 3 3 b c b c . . 
        . . e d c b b b b b b c d e . . 
        . . e e c c c c c c c c e e . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        `],
    100,
    character.rule(Predicate.FacingDown, Predicate.NotMoving)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . f f f f f f f f . . . . 
        . . . f c f f f f f f c f . . . 
        . . . f f b f f f f b f f . . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f f . 
        . f c b c b 3 3 3 3 b c b c f . 
        . . e d c b b b b b b c d e . . 
        . . e e c c c c c c c c e e . . 
        . . . . 6 6 6 6 6 6 6 6 e e . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        `],
    100,
    character.rule(Predicate.FacingUp, Predicate.NotMoving)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f f f f c f f f . . 
        . . . f f f f f b c f f f f . . 
        . . . f f e f f f f f f f f . . 
        . . . f e d e f f f f f f f . . 
        . . . f e d d e f f f f f f . . 
        . . . e d d f b e f f f f f . . 
        . . . e d d f 1 d f f f f f . . 
        . . . e d d d d d f f f f f . . 
        . . f f e e e e e f f f f f f . 
        . . . . c 3 3 b c b b c . . . . 
        . . . . c b b b e d d e . . . . 
        . . . . c c c c e e e e . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        `],
    100,
    character.rule(Predicate.FacingLeft, Predicate.NotMoving)
    )
    character.runFrames(
    mySprite,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f c f f f f f f f . . . 
        . . f f f f c b f f f f f . . . 
        . . f f f f f f f f e f f . . . 
        . . f f f f f f f e d e f . . . 
        . . f f f f f f e d d e f . . . 
        . . f f f f f e b f d d e . . . 
        . . f f f f f d 1 f d d e . . . 
        . . f f f f f d d d d d e . . . 
        . f f f f f f e e e e e f f . . 
        . . . . c b b c b 3 3 c . . . . 
        . . . . e d d e b b b c . . . . 
        . . . . e e e e c c c c . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        `],
    100,
    character.rule(Predicate.FacingRight, Predicate.NotMoving)
    )
}
let sceneUpdate = false
let count = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . . f c f f f f f f c f . . . 
    . . . f f b f f f f b f f . . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f e f f f f f . . 
    . . f f f f f e d e f f f f . . 
    . . f f f f e d d d e f f f . . 
    . . f f f b f d d f b e f f . . 
    . . f f d 1 f d d f 1 d f f . . 
    . . f f f d d d d d d f f f . . 
    . f f f f e e e e e e f f f f . 
    . . c b c b 3 3 3 3 b c b c . . 
    . . e d c b b b b b b c d e . . 
    . . e e c c c c c c c c e e . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . 1 1 1 . . 1 1 1 . . . . 
    `, SpriteKind.Player)
mySprite.startEffect(effects.confetti)
controller.moveSprite(mySprite)
character.setCharacterState(mySprite, character.rule(Predicate.FacingDown, Predicate.NotMoving))
animateCharacter()
character.clearCharacterState(mySprite)
game.onUpdate(function () {
    if (count == 0) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1f1ffffffffffffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff1fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff1ff1ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddffddddddddfffdddddddffdddffdddffdddfffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd22222222dd22222222dfd2222222dd222dd222dd222dffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222222222d222222222d222222222d222dd222dd222dffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222444222d222244222d222444222d222dd222dd222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222444222d222242222d222444222d222d22222d222dffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff11ffffffffffffffffffd222ddd222d222222222d222ddd222d222d22222d222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffd222ddd222d222222244d222222222d2222222222222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffd222ddd222d222222224d222222222d4222224222224dffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffff11ffffffffffffffffffd222dd2222d222242222d222222222dd42224d42224dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222222222d222242222d222444222dd42224d42224dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffd222222224d2222d2222d222444222dfd424dfd424dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff1f1ffffffffffffffffffffffffffffffffffffffffffd44444444dfd444d444dd444ddd444dfd444dfd444dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffddddddddfffdddfdddffdddfffdddfffdddfffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffdddfdddfffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222dffd222d222dfd222dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222dffd222d222dfd222dffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd2222dd2222d222dfd222dffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffd2222222222d222ddd222dffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd2222222222d422222224dffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd2222222222dd4222224dfffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd2224224222dfd42224dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222d44d222dffd222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222dddd222dffd222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd222dffd222dffd222dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd444dffd444dffd444dfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffdddffffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1ffffffffffffffffffffdddfdddffdddfdddddddddfddddddddfddddddddffdddffdddffdddddddffdddfffdddfdddfdddddddfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1fffffffffffffffffffd222d222dd222d222222222d22222222d22222222dd222dd222dd2222222dd222ddd222d222d2222222dffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d222dd222d222222222d22222222d222222222d222dd222d222222222d222ddd222d222d22222222dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d2222d222d222222222d22224444d222244222d2222d222d222222222d222ddd222d222d22244222dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d2222d222d444222444d22224444d222242222d2222d222d222244222d222ddd222d222d22244222dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d22222222dddd222dddd2222222dd222222222d22222222d222222444d222222222d222d222d2222dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d22222222dffd222dffd2222222dd222222244d22222222d422222224d222222222d222d22222222dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d22222222dffd222dffd2222444dd222222224d22222222d444222222d222444222d222d22222222dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d22242222dffd222dffd22222222d222242222d22242222d222442222d222ddd222d222d22222244dfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d222d4222dffd222dffd22222222d222242222d222d4222d222222222d222ddd222d222d222444ddffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd222d222d4222dffd222dffd22222222d2222d2222d222d4222d422222224d222ddd222d222d222dddffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffd444d444dd444dffd444dffd44444444dd444d444dd444dd444ddddddddddd444ddd444d444d444dffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffdddfdddffdddffffdddffffddddddddffdddfdddffdddffdddffdddddddffdddfffdddfdddfdddffffffffffffffffffffff11fffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1ffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffff
            fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff11fffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1ff1ffffffffffffffff9fffffffff444ff444fff44444ff44fff44ff444444ff4444444ff44444ff444444fff444444ffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff1ff1ffffffffffffffff9ffffffff4444444444f4444444f44fff44f4444444f44444444f4444444f4444444f4444444ffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff11fffffffffffffffff9ffffffff4444444444f44fff44f44fff44f44ffffff44fffffff44fff44f44fff44f44fffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffff44ff44ff44f44fff44f44fff44f44ffffff44fffffff44fff44f44fff44f44fffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fff1ffff44ff44ff44f44fff44f44444fff4444444f44fffffff44fff44f44fff44f4444444ffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffff44ff44ff44f44fff44f44444fff4444444f44fffffff44fff44f44fff44f4444444ffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffff44ff44ff44f4444444f44fff44f44ffffff44fffffff44fff44f44fff44f44fffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffff44ff44ff44f4444444f44fff44f44ffffff44fffffff44fff44f44fff44f44fffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffff44ff44ff44f44fff44f44fff44f4444444f44444444f4444444f4444444f4444444ffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9ffffffff44ff44ff44f44fff44f44fff44ff444444ff4444444ff44444ff444444fff444444ffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9ffffffffffffffff444444f444444ff444444f444444f444444ff44444ff444444fffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffff4444444f4444444f444444f444444f444444f4444444f4444444fffffffffff1ff9fffffffffffffffffffffffffffffffffffffff
            ffff1111111fffffffffffffffffffffffffff9fffffffffffffff44ffffff44fff44fff44fffff44fffff44fff44fff44f44fff44ffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffff44ffffff44fff44fff44fffff44fffff44fff44fff44f44fff44ffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffff4444444f44fff44fff44fffff44fffff44fff44fff44f44fff44ffffffffffffff9fffffffffffffffffffffffff1fffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffff4444444f44fff44fff44fffff44fffff44fff44fff44f44fff44ffffffffffffff9fffffffffffffffffffffffff1fffffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffff44ffffff44fff44fff44fffff44fffff44fff44fff44f44fff44ffffffffffffff9fffffffffff1fffffffffff11111fffffffffff
            fffffff1ffffffffffffffffffffffffffffff9fffffffffffffff44ffffff44fff44fff44fffff44fffff44fff44fff44f44fff44ffffffffffffff9fffffffffffffffffffffffff1fffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffff4444444f4444444f444444fff44fff444444f4444444f44fff44ffffffffffffff9fffffffffffffffffffffffff1fffffffffffff
            ffffffffffffffffffffffffffffffffffffff9ffffffffffffffff444444f444444ff444444fff44fff444444ff44444ff44fff44ffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1fffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    } else if (count == 1) {
        scene.setBackgroundImage(assets.image`STAGE_1_TWITCH`)
    } else if (count == 2) {
        scene.setBackgroundImage(assets.image`STAGE_2_SMART_GOAL`)
    } else if (count == 3) {
        scene.setBackgroundImage(assets.image`STAGE_3_GOAL`)
    } else if (count == 4) {
        scene.setBackgroundImage(assets.image`STAGE_4_MICROSOFT_TEAM`)
    } else if (count == 5) {
        scene.setBackgroundImage(assets.image`STAGE_5_GITHUB`)
    } else if (count == 6) {
        scene.setBackgroundImage(assets.image`STAGE_6_NEXT`)
    } else if (count == 7) {
        scene.setBackgroundImage(assets.image`myImage1`)
    } else {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
            ff1f1fffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
            fff1ffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffff
            ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffff1ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff11ffffffffffffffff11111ffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff1fffffffffffffff1ff1fffffffffffffffff1ffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffff1ffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11fffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffff1fffffffffffffffffffff1111111111111111ffff1111ffffff1111ffffff111111111ffffff1111ffffff1111ffff1111ffffff11dddffffffffffffffffffffffffffffffffffffff
            ffffffffffff1fffffffffffffffffffff55555555555555554fff55554fffff55554ffff15555555555fffff55554fffff55554fff55554fffff555554fffffffffffffffffffffffffffffffffffff
            ffffffffffff1fffffffffffffffffffff555555555555555544ff555544ffff555544ff1555555555555ffff555544ffff555544ff555544ffff5555544ffffffffffffffffffffffffffffffffffff
            ffffffffffff1fffffffffff1fffffffff5555555555555555444f5555444fff5555444f55555555555554fff5555444fff5555444f5555444fff55555444fffffffffffffffffffffffffffffffffff
            ffffffffff11111fffffffffffffffffff5555555555555555444f5555444fff5555444f5555eeeee555544ff5555544fff5555444f5555444fff5555e444ffffffffffffffffffffffff1ffffffffff
            ffffffffffff1ffffffffffffffffffffffeeeee5555eeeeee444f5555444fff5555444f55554eeee5555444f5555554fff5555444f5555444ff5555eee44fffffffffffffffffffffffffffffffffff
            ffffffffffff1fffffffffffffffffffffffeeee55554eeeeee44f5555444fff5555444f555544eee5555444f5555555fff5555444f5555444f5555eeeee4fffffffffffffffffffffffffffffffffff
            ffffffffffff1ffffffffffffffffffffffffeee555544eeeeee4f55555555555555444f5555555555555444f55555555ff5555444f55555555555eeeeefffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff55555555555555444f5555555555555444f555555555f5555444f5555555555eeeeeffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff55555555555555444f5555555555555444f55554555555555444f55555555555eeefffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff55555555555555444f5555555555555444f55554455555555444f555555555555effffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff5555eeeeee5555444f5555eeeee5555444f55554445555555444f5555444ff5555efffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff55554eeeee5555444f55554eeee5555444f5555444f555555444f5555444fff5555effffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff555544eeee5555444f555544eee5555444f5555444ff55555444f5555444ffff55554fffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff5555444fff5555444f5555444ff5555444f5555444fff5555444f5555444ffff555544ffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff5555444fff5555444f5555444ff5555444f5555444fff5555444f5555444ffff5555444fffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff5555444fff5555444f5555444ff5555444f5555444fff5555444f5555444ffff5555444fffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffff5555444fffffff5555444fff5555444f5555444ff5555444f5555444fff5555444f5555444ffff5555444fffffffffffffffffffffffffffffffffff
            ffffffffffffff11fffffffffffffffffffffffffeeee44ffffffffeeee44ffffeeee44ffeeee44fffeeee44ffeeee44ffffeeee44ffeeee44ffffeeee444fffffffffffffffffffffffffffffffffff
            fffffffffffff1ff1fffffffffffffffffffffffffeeee4fffffffffeeee4fffffeeee4fffeeee4ffffeeee4fffeeee4fffffeeee4fffeeee4fffffeeee44fffffffffffffffffffffffffffffffffff
            fffffffffffff1ff1ffffffffffffffffffffffffffeeeeffffffffffeeeeffffffeeeeffffeeeefffffeeeeffffeeeeffffffeeeeffffeeeeffffffeeee4fffffffffffffffffffffffffffffffffff
            ffffffffffffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffff1111ffffff1111111111fffffff1111ffffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff55554fffffff55554ffff155555555555ffffff55554fffff55554ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff555544ffffff555544ff15555555555555fffff555544ffff555544fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff5555444fffff5555444f555555555555555ffff5555444fff5555444ffffffffff1fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff5555444fffff5555444f5555555555555554fff5555444fff5555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff5555544ffff55555444f5555eeeeeee555544ff5555444fff5555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff1ffffffffffffffffffffff555554fff55555e444f55554eeeeee5555444f5555444fff5555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffff1f1ffffffffffffffffffffff55555ff55555eee44f555544eeeee5555444f5555444fff5555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff1ffffffffffffffffffffffff5555555555eeeeeff5555444ffff5555444f5555444fff5555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555eeeeefff5555444ffff5555444f5555444fff5555444ffffffffffffffffff1fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555eeeeeffff5555444ffff5555444f5555444fff5555444ffffffffffffffffff1fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555eeeeefffff5555444ffff5555444f5555444fff5555444ffffffffffffffff11111fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55554eeeffffff5555444ffff5555444f5555444fff5555444ffffffffffffffffff1fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555544efffffff5555444ffff5555444f5555444fff5555444ffffffffffffffffff1fffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555444fffffff555555555555555444f55555555555555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555444fffffff555555555555555444f55555555555555444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555444ffffffff55555555555554444ff5555555555554444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff5555444fffffffff5555555555544444fff555555555544444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee44ffffffffffeeeeeeeeeee4444ffffeeeeeeeeee4444ffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeee4fffffffffffeeeeeeeeeee44ffffffeeeeeeeeee44fffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffeeeeffffffffffffeeeeeeeeeeeffffffffeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffff1fffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff1111fffffffffff1111ffffff111111111ffffff1111ffffff11dddffff11111111111111ffffff1111111111fffffffff1111111111fffffff111111111111ffffff11111111111111ffffffff
            fffff55554ffffffffff55554ffff15555555555fffff55554fffff555554fff555555555555554ffff155555555555fffffff155555555555ffffff5555555555555fffff555555555555554fffffff
            fffff555544fffffffff555544ff1555555555555ffff555544ffff5555544ff5555555555555544ff15555555555555fffff15555555555555fffff55555555555555ffff5555555555555544ffffff
            fffff5555444ffffffff5555444f55555555555554fff5555444fff55555444f55555555555555444f555555555555555ffff555555555555555ffff555555555555554fff55555555555555444fffff
            fffff5555544fffffff55555444f5555eeeee555544ff5555444fff5555e444f5555eeeeeeeeeee44f5555555555555554fff5555555555555554fff5555555555555544ff5555eeeeeeeeeee44fffff
            fffff5555554ffffff555555444f55554eeee5555444f5555444ff5555eee44f55554eeeeeeeeeee4f5555eeeeeee555544ff5555eeeeeee555544ff5555eeeeee5555444f55554eeeeeeeeeee4fffff
            fffff5555555fffff5555555444f555544eee5555444f5555444f5555eeeee4f555544eeeeeeeeeeef55554eeeeee5555444f55554eeeeee5555444f55554eeeee5555444f555544eeeeeeeeeeefffff
            fffff55555555fff55555555444f5555555555555444f55555555555eeeeefff555555555554ffffff555544eeeeeeeeee44f555544eeeee5555444f555544eeee5555444f555555555554ffffffffff
            fffff555555555f555555555444f5555555555555444f5555555555eeeeeffff5555555555544fffff5555444fffffeeeee4f5555444ffff5555444f5555444fff5555444f5555555555544fffffffff
            fffff55554555555555e5555444f5555555555555444f55555555555eeefffff55555555555444ffff5555444ffffffeeeeef5555444ffff5555444f5555444fff5555444f55555555555444ffffffff
            fffff5555445555555ee5555444f5555555555555444f555555555555effffff55555555555444ffff5555444ffffffffffff5555444ffff5555444f5555444fff5555444f55555555555444ffffffff
            fffff555544455555eee5555444f5555eeeee5555444f5555444ff5555efffff5555eeeeeeee44ffff5555444ffffffffffff5555444ffff5555444f5555444fff5555444f5555eeeeeeee44ffffffff
            fffff5555444f555eeee5555444f55554eeee5555444f5555444fff5555effff55554eeeeeeee4ffff5555444ffff5555ffff5555444ffff5555444f5555444fff5555444f55554eeeeeeee4ffffffff
            fffff5555444ff5eeeef5555444f555544eee5555444f5555444ffff55554fff555544eeeeeeeeffff5555444ffff55554fff5555444ffff5555444f5555444fff5555444f555544eeeeeeeeffffffff
            fffff5555444fffeeeff5555444f5555444ff5555444f5555444ffff555544ff55555555555555ffff55555555555555544ff555555555555555444f55555555555555444f55555555555555ffffffff
            fffff5555444ffffefff5555444f5555444ff5555444f5555444ffff5555444f555555555555554fff555555555555555444f555555555555555444f55555555555555444f555555555555554fffffff
            fffff5555444ffffffff5555444f5555444ff5555444f5555444ffff5555444f5555555555555544fff55555555555554444ff55555555555554444f55555555555554444f5555555555555544ffffff
            fffff5555444ffffffff5555444f5555444ff5555444f5555444ffff5555444f55555555555555444fff5555555555544444fff5555555555544444f555555555555e4444f55555555555555444fffff
            ffffffeeee44fffffffffeeee44ffeeee44fffeeee44ffeeee44ffffeeee444ffeeeeeeeeeeeeee44ffffeeeeeeeeeee4444ffffeeeeeeeeeee4444ffeeeeeeeeeeeee444ffeeeeeeeeeeeeee44fffff
            fffffffeeee4ffffffffffeeee4fffeeee4ffffeeee4fffeeee4fffffeeee44fffeeeeeeeeeeeeee4fffffeeeeeeeeeee44ffffffeeeeeeeeeee44ffffeeeeeeeeeeeee4ffffeeeeeeeeeeeeee4fffff
            ffffffffeeeefffffffffffeeeeffffeeeefffffeeeeffffeeeeffffffeeee4ffffeeeeeeeeeeeeeeffffffeeeeeeeeeeeffffffffeeeeeeeeeeeffffffeeeeeeeeeeeeffffffeeeeeeeeeeeeeefffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1f1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff1ffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff11ffffffffffffffffffffffffff1fffffffffffffffff1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ff1fffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
            ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
    }
    if (sceneUpdate) {
        mySprite.setPosition(6, 106)
        sceneUpdate = false
    }
})
game.onUpdate(function () {
    if (count == 9) {
        game.over(true)
    }
})
