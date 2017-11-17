package com.mg.learning.corejava1.ch7exceptionandlogging;

import java.util.logging.Logger;

public class LocationLogTest {
	private static Logger logger = Logger.getLogger("com.mg.learning", "com.mg.learning.corejava1.ch7exceptionandlogging.logmessages");
	
	public static void main(String[] args) {
		logger.info("readingFile");
	}
}
