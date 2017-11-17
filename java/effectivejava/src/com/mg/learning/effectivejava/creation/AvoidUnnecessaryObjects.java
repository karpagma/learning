package com.mg.learning.effectivejava.creation;

import java.util.Calendar;
import java.util.Date;
import java.util.TimeZone;

class Person {
    private static final Date BOOM_START;
    private static final Date BOOM_END;

    static {
        Calendar gmtCal = Calendar.getInstance(TimeZone.getTimeZone("GMT"));
        gmtCal.set(1946, Calendar.JANUARY, 1, 0, 0, 0);
        BOOM_START = gmtCal.getTime();
        gmtCal.set(1965, Calendar.JANUARY, 1, 0, 0, 0);
        BOOM_END = gmtCal.getTime();
    }

    private final Date birthDate;

    public Person(Date birthDate) {
        this.birthDate = birthDate;
    }

    public boolean isBabyBoomer() {
        return birthDate.compareTo(BOOM_START) >= 0 &&
                birthDate.compareTo(BOOM_END) < 0;
    }
}

public class AvoidUnnecessaryObjects {
    public static void main(String[] args) {
        try {
            Calendar calendar = Calendar.getInstance();
            calendar.set(1950, Calendar.JANUARY, 1);
            Person person = new Person(calendar.getTime());
            System.out.println(person.isBabyBoomer());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
