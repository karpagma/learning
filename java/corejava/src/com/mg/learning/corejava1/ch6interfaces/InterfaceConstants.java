package com.mg.learning.corejava1.ch6interfaces;

interface Moveable {
	void move();
	
	int SPEED = 10;
	float TORQUE = 10.5f;
}

public class InterfaceConstants {
	public static void main(String[] args) {
		System.out.println(Moveable.SPEED);
	}
}
