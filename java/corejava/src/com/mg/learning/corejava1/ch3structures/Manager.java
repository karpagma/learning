package com.mg.learning.corejava1.ch3structures;

import java.util.Date;
import java.util.Objects;

public class Manager extends Employee {
	private int nrOfReportees;

	public Manager(String name, String dept, Date date, int nrOfReportees) {
		super(name, dept, date);
		this.setNrOfReportees(nrOfReportees);
	}

	public int getNrOfReportees() {
		return nrOfReportees;
	}

	public void setNrOfReportees(int nrOfReportees) {
		this.nrOfReportees = nrOfReportees;
	}
	
	@Override
	public boolean equals(Object other) {
		if (!super.equals(other)) return false;
		Manager otherM = (Manager) other;
		return Objects.equals(this.nrOfReportees, otherM.nrOfReportees);
	}
}
