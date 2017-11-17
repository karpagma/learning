package com.mg.learning.corejava1.ch14threading;

class Person {
	private String firstName;
	private String lastName;
	
	Person(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	void setName(String firstName, String lastName) {
		this.firstName = firstName;
		System.out.println("Set first name " + this.firstName);
		this.lastName = lastName;
		System.out.println("Set last name as " + this.lastName);
	}
	
	String getName() {
		String name = this.firstName;
		System.out.println("Get first name " + this.firstName);
		name += this.lastName;
		System.out.println("Get last name " + this.lastName);
		return name;
		
	}
}


public class ThreadSyncTest {
	
	
	
}
