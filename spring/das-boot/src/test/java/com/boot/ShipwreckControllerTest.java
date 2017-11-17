package com.boot;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.mockito.Mockito.*;

import com.boot.controller.ShipwreckController;
import com.boot.model.Shipwreck;
import com.boot.repository.ShipwreckRepository;

public class ShipwreckControllerTest {

	@InjectMocks
	private ShipwreckController controller;
	
	@Mock
	private ShipwreckRepository repository;
	
	@Before
	public void init() {
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	public void testShipwreckGet() {
		// Arrange
		Shipwreck expected = new Shipwreck();
		expected.setId(1l);
		when(repository.findOne(1l)).thenReturn(expected);
		
		// Act
		Shipwreck shipwreck = controller.get(1L);
		
		// Assert
		assertThat(shipwreck.getId(), is(1l));
		//assertEquals(1l, shipwreck.getId().longValue());
	}

}
