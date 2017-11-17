package com.mg.learning.corejava1.ch3structures;

import java.util.Date;

public class Equals {
	
	public static void main(String[] args) {
		Date d = new Date();
		Employee e1 = new Employee("n1", "d1", d);
		Employee e2 = new Employee("n1", "d1", d);
		
		Manager m1 = new Manager("m1", "d1", d, 11);
		Manager m2 = new Manager("m1", "d1", d, 11);
		
		if (e1.equals(e2)) {
			System.out.println("e1 equals e2");
		}
		
		if (m1.equals(m2)) {
			System.out.println("m1 equals m2");
		}
		
		Employee e3 = m2;
		if (e3.equals(m1)) {
			System.out.println("e3 equals m1");
		}
		
		System.out.println(e3 instanceof Manager);
		System.out.println(e3 instanceof Employee);
		
	}

}
