package com.mg.learning.corejava1.ch8generics;

class Employee implements Comparable<Employee> {
	private int age;
	private float salary;
	
	Employee(int age, float salary) {
		this.age = age;
		this.salary = salary;
	}
	
	public float getAge() {
		return this.age;
	}
	
	@Override
	public String toString() {
		return String.format("Employee with %d age", age);
	}

	@Override
	public int compareTo(Employee o) {
		return Float.compare(salary, o.salary);
	}

}

class Pair<T> {
	private T first;
	private T second;
	
	Pair(T first, T second) {
		this.first = first;
		this.second = second;
	}
	
	public T getFirst() {
		return first;
	}
	
	public T getSecond() {
		return second;
	}
}

class ArrayAlg {
	public static <T extends Comparable<T>> Pair<T> minmax(T[] list) {
		if (list == null || list.length == 0) {
			return null;
		}
		
		T min = list[0];
		T max = list[0];
		
		for (int i=1; i<list.length; i++) {
			if (min.compareTo(list[i]) > 0) min = list[i];
			if (max.compareTo(list[i]) < 0) max = list[i];
		}
		
		return new Pair<>(min, max);
	}
}

public class PairTest1 {
	public static void main(String[] args) {
		String[] names = {"madhan", "swarna", "shrishti", "shaashvat"};
		Pair<String> pair = ArrayAlg.minmax(names);
		System.out.printf("%s : %s\n", pair.getFirst(), pair.getSecond());
		
		Integer[] numbers = {3, 9, 2, 5, 4};
		Pair<Integer> numPair = ArrayAlg.minmax(numbers);
		System.out.printf("%d : %d\n", numPair.getFirst(), numPair.getSecond());
		
		Employee[] employees = {new Employee(42, 3000), new Employee(43, 2000), new Employee(41, 7000)};
		Pair<Employee> empPair =  ArrayAlg.minmax(employees);
		System.out.printf("%s : %s\n", empPair.getFirst(), empPair.getSecond());
	}

}
