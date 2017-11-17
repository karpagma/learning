package com.mg.learning.corejava1.ch6interfaces;

import java.util.Arrays;

class Employee implements Comparable<Employee> {
	private String name;
	private double salary;

	Employee(String name, double salary) {
		this.name = name;
		this.salary = salary;
	}
	
	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	@Override
	final public int compareTo(Employee other) {
		return Double.compare(salary, other.salary);
	}
}

class Manager extends Employee {
	private String dept;
	
	Manager(String name, double salary, String dept) {
		super(name, salary);
		this.dept = dept;
	}
	
	String getDept() {
		return this.dept;
	}
}


public class ComparableTest {
	public static void main(String[] args) {
		Employee e1 = new Employee("Ramu", 1000);
		Employee e2 = new Employee("Somu", 2000);
		Employee e3 = new Employee("Pavi", 500);
		
		Employee[] employees = {e1, e2, e3};
		Arrays.sort(employees);
		
		for (Employee e: employees) {
			System.out.println(e.getName());
		}
		
	}

}
