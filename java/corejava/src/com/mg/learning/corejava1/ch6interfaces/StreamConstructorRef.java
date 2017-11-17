package com.mg.learning.corejava1.ch6interfaces;

import java.util.Arrays;
import java.util.List;
//import java.util.stream.Collectors;
import java.util.stream.Stream;

class Person {
	private String name;
	
	Person(String name) {
		this.name = name;
	}
	
	String getName() {
		return this.name;
	}
}

public class StreamConstructorRef {
	public static void main(String[] args) {
		List<String> names = Arrays.asList("madhan", "swarna");
		Stream<Person> peopleStream = names.stream().map(Person::new);
		/*List<Person> people = peopleStream.collect(Collectors.toList());
		for (Person person : people) {
			System.out.println(person.getName());
		}*/
		
		/*Object[] objects = peopleStream.toArray();
		for (Object object : objects) {
			System.out.println(((Person)object).getName());
		}*/
		
		Person[] allpeople = peopleStream.toArray(Person[]::new);
		for (Person people : allpeople) {
			System.out.println(people);
		}
		
		
		
	}
}
