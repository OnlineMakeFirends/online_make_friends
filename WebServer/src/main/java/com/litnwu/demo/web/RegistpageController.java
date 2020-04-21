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
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;


@Controller
public class RegistpageController {
    private static final BCryptPasswordEncoder ENCODER = new BCryptPasswordEncoder();
    @Autowired
    private UserService userService;

    @GetMapping("/regist")
    public String registPage(Model model){
        model.addAttribute("user", new User());
        model.addAttribute("result", new JsonData(510,""));
        return "regist";
    }

    /* 使用th模板的注册功能 */
    @PostMapping("/regist_submit2")
    public String regist(@Valid User user, Errors errors,Model model){
        JsonData result;

        if(errors.hasErrors()){
            result = new JsonData(511,"格式错误！");
            model.addAttribute("result", result);
            return "regist";
        }

        System.out.println("[test]:"+user.getName()+" "+user.getPasswd());
        try{
            User finded_user = userService.findByName(user.getName());

            if(finded_user != null){
                result = new JsonData(302,"用户名已被注册！");
                model.addAttribute("result", result);
                return "regist";
            }
            userService.regist(user.getName(),ENCODER.encode(user.getPasswd()));
        }
        catch (Exception e){
            result = new JsonData(303,"未知错误！");
            model.addAttribute("result", result);
            return "redirect:/regist";
        }

        result = new JsonData(200,"注册成功！");
        model.addAttribute("result", result);
        return "regist";
    }
}

