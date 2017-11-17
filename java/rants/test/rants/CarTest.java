package rants;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Test;

public class CarTest {

	@Test
	public void driveTest() {
		Engine engine = mock(Engine.class);
		when(engine.accelarate()).thenReturn(90);
		Car car = new Car(engine);
		assertEquals(90, car.drive());
	}

}
