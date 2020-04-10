package com.litnwu.demo.web;

import com.litnwu.demo.json.JsonData;
import com.litnwu.demo.model.User;
import com.litnwu.demo.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegistpageController {
    @Autowired
    private UserService userService;

    @GetMapping("/regist")
    public String home(){return "regist";}

    @PostMapping("/regist_submit")
    public String regist(@Param("username") String name, @Param("password") String passwd){
        System.out.println("rere:"+name+passwd);
        //userService.regist(user);
        return "login";
    }
}
