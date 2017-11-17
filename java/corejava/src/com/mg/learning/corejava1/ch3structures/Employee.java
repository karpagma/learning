package com.mg.learning.corejava1.ch3structures;

import java.util.Date;
import java.util.Objects;

public class Employee implements Comparable<Employee> {
	private String name;
	private String dept;
	private Date date;
	
	public Employee(String name, String dept, Date date) {
		this.name = name;
		this.dept = dept;
		this.date = date;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	
	@Override
	public boolean equals(Object other) {
		if (this == other) return true;
		if (other == null) return false;
		if (this.getClass() != other.getClass()) return false;
		
		Employee otherE = (Employee) other;
		return Objects.equals(this.name, otherE.name) &&
				Objects.equals(this.dept, otherE.dept) &&
				Objects.equals(this.date, otherE.date);
				
	}

	@Override
	public int compareTo(Employee o) {
		return this.name.compareTo(o.name);
	}

}
