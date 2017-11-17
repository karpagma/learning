package com.mg.learning.corejava1.ch6interfaces;

import java.nio.file.Path;
import java.nio.file.Paths;
//import java.nio.file.StandardWatchEventKinds;

public class PathInterfaceUsage {
	public static void main(String[] args) {
		Path path = Paths.get("/Users", "m0g00rh", "temp");
		//path.register(() -> System.out.println("changed"), {StandardWatchEventKinds.ENTRY_CREATE});
		System.out.println(path.toString());
	}
}
