package com.mg.learning.effectivejava.objectmethods;

class CaseInsensitiveString {
    private final String s;

    public CaseInsensitiveString(String s) {
        if (s == null) {
            throw new NullPointerException();
        }
        this.s = s;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof CaseInsensitiveString) {
            CaseInsensitiveString other = (CaseInsensitiveString) o;
            return s.equalsIgnoreCase(other.s);
        }

        if (o instanceof String) {
            String other = (String) o;
            return s.equalsIgnoreCase(other);
        }

        return false;
    }

}

/**
 * a.equals(b) => b.equals(a)
 */
public class EqualsSymmetryViolation {
    public static void main(String[] args) {
        CaseInsensitiveString cis = new CaseInsensitiveString("Polish");
        String s = "polish";

        System.out.println(cis.equals(s));
        System.out.println(s.equals(cis));
    }
}
