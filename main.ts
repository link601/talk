enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(blockchain.id())
})
radio.onReceivedNumber(function (receivedNumber) {
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltLeft, function () {
    ooo = 0
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    ooo += 1
})
timeanddate.onDayChanged(function () {
    timeanddate.setDate(12, 24, 2024)
})
blockchain.onEvent(BlockChainEvent.Updated, function () {
    basic.showString("you got")
    basic.showNumber(mario)
})
let ooo = 0
let mario = 0
timeanddate.setDate(12, 23, 2024)
mario += 10
blockchain.addBlock(mario)
radio.setGroup(ooo)
ooo = 0
