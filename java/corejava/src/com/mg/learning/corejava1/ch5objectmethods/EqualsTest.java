package com.mg.learning.corejava1.ch5objectmethods;

import java.util.Date;
import java.util.Objects;

class Employee {
	
	private String name;
	private double salary;
	private Date joinDate;
	
	public Employee(String name, double salary, Date joinDate) {
		super();
		this.name = name;
		this.salary = salary;
		this.joinDate = joinDate;
	}

	public String getName() {
		return name;
	}

	public double getSalary() {
		return salary;
	}

	public Date getJoinDate() {
		return joinDate;
	}
	
	@Override
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		
		if (other == null) {
			return false;
		}
		
		/*if (getClass() != other.getClass()) {
			return false;
		}*/
		
		if (!(other instanceof Employee)) {
			return false;
		}
		
		Employee otherEmployee = (Employee) other;
		
		return Objects.equals(name, otherEmployee.name)
				&& Objects.equals(salary, otherEmployee.salary)
				&& Objects.equals(joinDate, otherEmployee.joinDate);
	}
	
}

class Manager extends Employee {
	private String dept;
	
	Manager(String name, double salary, Date joinDate, String dept) {
		super(name, salary, joinDate);
		this.dept = dept;
	}
	
	String getDept() {
		return dept;
	}
	
	@Override
	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		
		if (other == null) {
			return false;
		}
		
		/*if (getClass() != other.getClass()) {
			return false;
		}*/
		
		if (!(other instanceof Manager)) {
			return false;
		}
		
		if (!super.equals(other)) {
			return false;
		}
		
		Manager otherManager = (Manager) other;
		
		return Objects.equals(dept, otherManager.dept);
	}
}

public class EqualsTest {
	
	public static void main(String[] args) {
		Date d1 = new Date();
		
		Employee e = new Employee("Ramu", 1000, d1);
		Manager m = new Manager("Ramu", 1000, d1, "GIF");
		
		System.out.println(e.equals(m));
		System.out.println(m.equals(e));
		
	}

}
