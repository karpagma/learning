package com.mg.learning.corejava1.ch6interfaces;

interface Vehicle {
	void drive();
	
	default void callMe() {
		System.out.println("Vehicle::callme");
	}
}

class Car implements Vehicle {
	public void drive() {
		System.out.println("Car::drive");
	}
}


public class InterfaceMethodsTest {
	public static void main(String[] args) {
		Vehicle vehicle = new Car();
		vehicle.drive();
		
		vehicle.callMe();
		
		Car c1 = new Car();
		c1.callMe();
	}
}
