package com.litnwu.demo.web;

import com.litnwu.demo.model.User;
import com.litnwu.demo.service.userService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class LoginController {
    @Autowired
    userService userService;
    @ResponseBody
    @RequestMapping(value = "/login_ajax_check")
    public User login(HttpServletRequest request, HttpServletResponse response, HttpSession session, Model model)
    {
        String name = request.getParameter("username");
        String passwd = request.getParameter("password");
        System.out.println(name);
        System.out.println(passwd);
        User user = userService.findByName(name,passwd);

        if(user != null){
            System.out.println(user.name);
            session.setAttribute("user", user);
        }

        return user;
    }

}

