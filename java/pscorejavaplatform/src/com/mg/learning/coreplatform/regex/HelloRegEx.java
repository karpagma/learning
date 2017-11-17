package com.mg.learning.coreplatform.regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class HelloRegEx {
    public static void main(String[] args) {
        String value = "apple, apple, and oranges please";
        Pattern pattern = Pattern.compile("\\w+");
        Matcher matcher = pattern.matcher(value);
        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
}
