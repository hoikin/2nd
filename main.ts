dht11.set_pin(DigitalPin.P1)
basic.forever(function () {
    basic.showString("T:")
    basic.showNumber(dht11.temperature())
    basic.showString("H:")
    basic.showNumber(dht11.humidity())
})
