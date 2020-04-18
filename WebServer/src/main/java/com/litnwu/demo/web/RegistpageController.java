package com.litnwu.demo.web;

import com.google.gson.Gson;
import com.litnwu.demo.json.JsonData;
import com.litnwu.demo.model.User;
import com.litnwu.demo.service.UserService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@Controller
public class RegistpageController {
    private static final BCryptPasswordEncoder ENCODER = new BCryptPasswordEncoder();
    @Autowired
    private UserService userService;

    @GetMapping("/regist")
    public String home(){return "regist";}

    /* 使用th模板测试
    @PostMapping("/regist_submit2")
    public String regist(@Param("username") String name, @Param("password") String passwd){
        System.out.println("rere:"+name+passwd);
        //userService.regist(user);
        return "login";
    }*/

    @ResponseBody
    @RequestMapping(value = "/regist_submit")
    public JsonData login(HttpServletRequest request, HttpServletResponse response, HttpSession session, Model model)
    {
        JsonData result;
        String name = request.getParameter("username");
        String passwd = request.getParameter("password");
        //......

        if(name.equals("") || passwd.equals("")){
            result = new JsonData(303,"用户名或密码格式错误");
            session.setAttribute("result", result);
            return result;
        }

        try{
            User user = userService.findByName(name);

            if(user != null){
                result = new JsonData(302,"用户名已被注册！");
                session.setAttribute("result", result);
                return result;
            }
            userService.regist(name,ENCODER.encode(passwd));
        }
        catch (Exception e){
            result = new JsonData(303,"未知错误！");
            return result;
        }

        result = new JsonData(200,"注册成功！");
        session.setAttribute("result", result);
        return result;
    }
}

