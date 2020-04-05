package com.litnwu.demo.handle;

import com.google.gson.Gson;
import com.litnwu.demo.json.JsonData;
import com.litnwu.demo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component("UserLoginAuthenticationFailureHandler")
@Slf4j
public class UserLoginAuthenticationFailureHandler extends SimpleUrlAuthenticationFailureHandler {
    @Resource
    @Autowired
    private UserService userService;

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        JsonData jsonData = null;
        if(exception.getMessage().equals("用户不存在")){
            jsonData = new JsonData(402,"用户不存在");
        }

        if(exception.getMessage().equals("Bad credentials")){
            jsonData = new JsonData(403,"密码错误");
        }

        String json = new Gson().toJson(jsonData);
        response.setContentType("application/json;charset=utf-8");
        PrintWriter out = response.getWriter();

        out.write(json);
        out.flush();
        out.close();
    }
}
