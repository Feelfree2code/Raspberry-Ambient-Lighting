package com.kagan.client;

import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalOutput;
import com.pi4j.io.gpio.RaspiPin;

public class Led {

    private final GpioController gpioController = GpioFactory.getInstance();
    private final GpioPinDigitalOutput led1 = gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_01);

    public void setLed() throws InterruptedException {
        led1.high();
        System.out.println("Led on");
        Thread.sleep(5000);
        System.out.println("Led off");
        led1.low();
        Thread.sleep(5000);
    }
}
