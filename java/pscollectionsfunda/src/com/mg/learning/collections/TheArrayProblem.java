package com.mg.learning.collections;

public class TheArrayProblem {
	public static void main(String[] args) {
		try {
			Product door = new Product("Woodn Door", 35);
			Product window = new Product("Floor Panel", 25);
			
			Product[] products = {door, window};
			
			System.out.println(products);
			
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
}
