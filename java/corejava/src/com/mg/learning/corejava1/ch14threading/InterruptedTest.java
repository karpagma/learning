package com.mg.learning.corejava1.ch14threading;

public class InterruptedTest {
	public static void main(String[] args) throws InterruptedException {
		Runnable runnable = () -> {
			int i = 0;
			while (!Thread.currentThread().isInterrupted() && i<1000) {
				for (int j=0; j<1000000; j++) {
					System.out.println(j);
				}
				i++;
			}
		};
		
		Thread thread = new Thread(runnable);
		thread.start();
		Thread.sleep(1000);
		thread.interrupt();
	}
}
