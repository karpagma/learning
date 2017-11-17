package com.boot;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.boot.controller.HomeController;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = DasBootApplication.class)
public class DasBootApplicationTests {

	@Test
	public void testApp() {
		HomeController controller = new HomeController();
		String result = controller.home();
		assertEquals(result, "Das Boot, reporting for duty!");
	}

}
