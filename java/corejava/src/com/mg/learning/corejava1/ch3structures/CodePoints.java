package com.mg.learning.corejava1.ch3structures;

public class CodePoints {
	public static void main(String[] args) {
		String greeting = "Hello";
		
		System.out.println(greeting.length());
		System.out.println(greeting.codePointCount(0, greeting.length()));
		
		System.out.println(greeting.charAt(0));
		System.out.println(greeting.codePointAt(0));
	}
}
