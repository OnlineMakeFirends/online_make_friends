package com.litnwu.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginpageController {
    @GetMapping("/login")
    public String home(){return "login";}
}