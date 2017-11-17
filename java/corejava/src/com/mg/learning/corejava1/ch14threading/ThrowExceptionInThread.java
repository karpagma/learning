package com.mg.learning.corejava1.ch14threading;

public class ThrowExceptionInThread {
	public static void main(String[] args) {
		try {
			Runnable runnable = () -> {
				try {
					throw new Exception("chumma exception");
				} catch (Exception e) {
					// TODO Auto-generated catch block
					//e.printStackTrace();
					//throw e;
				}
			};
			
			
			
		} catch(Exception e) {
			System.out.println(e.getMessage());
		}
	}
}
