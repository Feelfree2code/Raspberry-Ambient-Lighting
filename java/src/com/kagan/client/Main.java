package com.kagan.client;

import com.pi4j.io.gpio.GpioController;
import com.pi4j.io.gpio.GpioFactory;
import com.pi4j.io.gpio.GpioPinDigitalOutput;
import com.pi4j.io.gpio.RaspiPin;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        final GpioController gpioController = GpioFactory.getInstance();

        final GpioPinDigitalOutput led1 = gpioController.provisionDigitalOutputPin(RaspiPin.GPIO_01);

        led1.high();
        Thread.sleep(5000);
        led1.low();
    }
}
