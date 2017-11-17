package com.mg.learning.corejava1.ch3structures;

public class StringEquality {
	public static void main(String[] args) {
		String greet = "Hello";
		
		// wrong right way
		if (greet == "Hello") {
			System.out.println("greet == 'hello' is true");
		}
		
		if (greet.substring(0, 3) == "Hel") {
			System.out.println("substring equals");
		}
		
		if (greet.substring(0, 3).equals("Hel")) {
			System.out.println("substring equals");
		}
	}
}
