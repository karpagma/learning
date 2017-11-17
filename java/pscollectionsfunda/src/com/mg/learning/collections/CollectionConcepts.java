package com.mg.learning.collections;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class CollectionConcepts {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Product door = new Product("Wooden door", 35);
		Product floorPanel = new Product("Floor Panel", 25);
		Product window = new Product("Glass Window", 10);
		
		Collection<Product> products = new ArrayList<>();
		products.add(door);
		products.add(floorPanel);
		products.add(window);
		
		Product window1 = new Product("Glass Window", 10);
		products.remove(window1);
		
		for (Product product: products) {
			System.out.println(product);
		}
		
		List<Product> p1 = (List<Product>) products;
		p1.get(0).setWeight(75);
		
		System.out.println(door);
		
		
		
		
	}
}
