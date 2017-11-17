package com.example.herokuviajava;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {

    @RequestMapping("/api/hello")
    String hello() {
        return "Hello, Springboot world!";
    }

}
