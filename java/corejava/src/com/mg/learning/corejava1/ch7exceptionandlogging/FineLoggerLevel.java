package com.mg.learning.corejava1.ch7exceptionandlogging;

import java.io.IOException;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.Logger;

class ProcessHandler {
	private static Logger logger = Logger.getLogger("com.mg.learning.corejava1.ch7exceptionlogging.ProcessHandler");
	
	void process(String whatto, Object[] params) throws InterruptedException, SecurityException, IOException {
		logger.setLevel(Level.FINE);
		/*logger.setUseParentHandlers(false);
		Handler handler = new ConsoleHandler();
		handler.setLevel(Level.FINE);
		logger.addHandler(handler);*/
		
		FileHandler handler = new FileHandler();
		handler.setLevel(Level.FINE);
		logger.addHandler(handler);
		
		logger.entering("ProcessHandler", "process", params);
		Thread.sleep(1000);
		logger.exiting("ProcessHandler", "process");
	}
}

public class FineLoggerLevel {
	private static Logger logger = Logger.getLogger("com.mg.learning.corejava1.ch7exceptionandlogging.FineLoggerLevel");
	
	public static void main(String[] args) throws Exception {
		//FileHandler handler = new FileHandler();
		//logger.addHandler(handler);
		
		logger.info("entering main");
		ProcessHandler processHandler = new ProcessHandler();
		Object[] params = {"madhan", 42};
		processHandler.process("movetonisarga", params);
		logger.info("leaving");
	}
}
