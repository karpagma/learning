package com.mg.learning.corejava1.ch3structures;

public class StringNullorEmpty {
	public static void main(String[] args) {
		String name = "";
		
		System.out.println(name != null && !name.isEmpty());
	}
}
