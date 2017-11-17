package com.mg.learning.corejava1.ch6interfaces;

interface CompleteNotify {
	void onRead(String data);
}

class Reader {
	void read(CompleteNotify notifier) {
		notifier.onRead("this is test data");
	}
}

public class MyLambdaTest {
	public static void main(String[] args) {
		Reader reader = new Reader();
		reader.read(data -> System.out.println(data));
	}
}
