package com.mg.learning.coreplatform.execenv;

import java.io.BufferedReader;
import java.nio.file.Files;
import java.nio.file.Paths;

public class CommandArgs {
    public static void main(String[] args) {
        if (args.length == 0) {
            showUsage();
            return;
        }

        String filename = args[0];
        if (!Files.exists(Paths.get(filename))) {
            System.out.println("\n File not found " + filename);
            return;
        }
        showFileLines(filename);
    }

    private static void showFileLines(String filename) {
        try (BufferedReader reader = Files.newBufferedReader(Paths.get(filename))) {
            String line = null;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
    }

    private static void showUsage() {
        System.out.println();
        System.out.println("Please provide the filename to process on the command line");
    }
}
