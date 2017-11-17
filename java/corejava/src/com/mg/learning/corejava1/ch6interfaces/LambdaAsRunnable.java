package com.mg.learning.corejava1.ch6interfaces;

import java.util.function.Consumer;
import java.util.function.Supplier;

public class LambdaAsRunnable {
	public static void main(String[] args) {
		Runnable runnable = () -> System.out.println("hello i am lambda");
		runnable.run();
		
		Supplier<String> supplier = () -> "this is from supplier";
		System.out.println(supplier.get());
		
		Consumer<String> consumer = name -> System.out.println("name is " + name);
		consumer.accept("madhan");
	}
}
