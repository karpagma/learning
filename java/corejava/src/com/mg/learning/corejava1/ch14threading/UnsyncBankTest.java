package com.mg.learning.corejava1.ch14threading;

import java.util.Arrays;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class Bank {
	private Lock bankLock = new ReentrantLock(); 
	private final double[] accounts;
	
	public Bank(int n, double initialBalance) {
		accounts = new double[n];
		Arrays.fill(accounts, initialBalance);
	}
	
	 public void transfer(int from, int to, double amount) {
		 if (accounts[from] < amount) return;
		 
		 bankLock.lock();
		 try {
			 System.out.print(Thread.currentThread());
			 accounts[from] -= amount;
			 System.out.printf(" %10.2f from %d to %d", amount, from, to);
			 accounts[to] += amount;
			 System.out.printf(" Total Balance: %10.2f%n", getTotalBalance());
		 } finally {
			 bankLock.unlock();
		 }
	 }
	 
	 public double getTotalBalance() {
		 double sum = 0;
		 for (double a : accounts) {
			 sum += a;
		 }
		 return sum;
	 }
	 
	 public int size() {
		 return accounts.length;
	 }
}

public class UnsyncBankTest {
	public static final int NACCOUNTS = 100;
	public static final double INITIAL_BALANCE = 1000;
	public static final double MAX_AMOUNT = 1000;
	public static final int DELAY = 10;
	
	public static void main(String[] args) {
		Bank bank = new Bank(NACCOUNTS, INITIAL_BALANCE);
		for (int i = 0; i < NACCOUNTS; i++) {
			 int fromAccount = i;
			 
			 Runnable runnable = () -> {
				try {
					int toAccount = (int) (bank.size() * Math.random());
					double amount = MAX_AMOUNT * Math.random();
					bank.transfer(fromAccount, toAccount, amount);
					Thread.sleep((int) (DELAY * Math.random()));
				} catch(InterruptedException ex) {
					System.out.println(ex.getMessage());
				}
			};
			
			Thread t = new Thread(runnable);
			t.start();
		}
	}
}
