package com.litnwu.demo.handle;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.litnwu.demo.json.JsonData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component("UserLoginAuthenticationSuccessHandler")
@Slf4j
public class UserLoginAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException{
        JsonData jsonData = new JsonData(200,"认证OK");
        String json = new Gson().toJson(jsonData);
        response.setContentType("application/json;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.write(json);
        out.flush();
        out.close();
    }
}
