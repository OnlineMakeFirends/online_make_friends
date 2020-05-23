package com.litnwu.demo.web;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomepageController {
    @GetMapping("/")
    public String root(){return "index";}
    @GetMapping("/home")
    public String homePage(){return "home";}

}
