package com.mg.learning.collections;

import static com.mg.learning.collections.ProductFixtures.*;

import static org.junit.Assert.*;

import java.util.Iterator;

import static org.hamcrest.Matchers.contains;


import org.junit.Test;

public class ShipmentTest {

	private Shipment shipment = new Shipment();
	
	@Test
	public void shouldAddItems() throws Exception {
		shipment.add(door);
		shipment.add(window);
		
		assertThat(shipment, contains(door, window));
	}
	
	@Test
	public void shouldReplaceItem() throws Exception {
		shipment.add(door);
		shipment.add(window);
		
		shipment.replace(window, floorPanel);
		
		assertThat(shipment, contains(door, floorPanel));
	}
	
	@Test
	public void shouldHandleReplaceOfMissingItem() throws Exception {
		shipment.add(door);
		
		shipment.replace(floorPanel, window);
		
		assertThat(shipment, contains(door));
	}
	
	@Test
	public void shouldIdentifyVanRequirements() throws Exception {
		shipment.add(door);
		shipment.add(floorPanel);
		shipment.add(window);
		
		shipment.prepare();
		
		assertThat(shipment.getLightVanProducts(), contains(window));
		assertThat(shipment.getHeavyVanProducts(), contains(door, floorPanel));
	}

}
