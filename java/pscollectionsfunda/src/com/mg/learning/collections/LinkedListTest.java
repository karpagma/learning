package com.mg.learning.collections;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class LinkedListTest {

	public static void main(String[] args) {
		List<String> names = new LinkedList<>();
		names.add("madhan");
		names.add("swarna");
		names.add("madhan");
		
		for (String name: names) {
			System.out.println(name);
		}
		
		Set<String> uniqueNames = new HashSet<>();
		uniqueNames.addAll(names);
		
		for (String name: uniqueNames) {
			System.out.println(name);
		}
	}

}
