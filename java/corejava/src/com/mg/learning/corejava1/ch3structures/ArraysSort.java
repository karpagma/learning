package com.mg.learning.corejava1.ch3structures;

import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.IntStream;

public class ArraysSort {
	public static void main(String[] args) {
		 Scanner in = new Scanner(System.in);
		 System.out.print("How many numbers do you need to draw? ");
		 int k = in.nextInt();
		 System.out.print("What is the highest number you can draw? ");
		 int n = in.nextInt();
		 
		 int[] numbers = IntStream.range(1, n+1).toArray();
		 
		 int[] result = new int[k];
		 for (int i = 0; i < result.length; i++) {
			 int r = (int) (Math.random() * n);
			 result[i] = numbers[r];
			 numbers[r] = numbers[n - 1];
			 n--;
		 }
		 
		 Arrays.sort(result);
		 System.out.println("Bet the following combination. It'll make you rich!");

		 for (int r : result) {
			 System.out.println(r);
		 }
	}
}
