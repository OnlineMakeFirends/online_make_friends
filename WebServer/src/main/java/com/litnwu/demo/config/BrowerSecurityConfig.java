package com.litnwu.demo.config;


import com.litnwu.demo.handle.UserLoginAuthenticationFailureHandler;
import com.litnwu.demo.handle.UserLoginAuthenticationSuccessHandler;
import com.litnwu.demo.service.MyUserDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.web.filter.CharacterEncodingFilter;


@Configuration  //标识为配置类
@EnableWebSecurity    //启动Spring Security的安全管理
@EnableGlobalMethodSecurity(securedEnabled = true)
@Slf4j
public class BrowerSecurityConfig extends WebSecurityConfigurerAdapter {
    private static final BCryptPasswordEncoder ENCODER = new BCryptPasswordEncoder();

    @Bean
    public PasswordEncoder passwordEncoder(){ //密码加密类
        return new BCryptPasswordEncoder();
    }

    @Bean
    public MyUserDetailsService myUserDetailsService(){
        return new MyUserDetailsService();
    }

    @Autowired
    private UserLoginAuthenticationFailureHandler userLoginAuthenticationFailureHandler;//验证失败的处理类

    @Autowired
    private UserLoginAuthenticationSuccessHandler userLoginAuthenticationSuccessHandler;//验证成功的处理类

    @Override
    protected void configure(HttpSecurity http)throws Exception{

        http.formLogin()
                .successHandler(userLoginAuthenticationSuccessHandler) // 自定义登录成功处理
                .failureHandler(userLoginAuthenticationFailureHandler) // 自定义登录失败处理
                .and()
                .authorizeRequests()  //定义哪些url需要保护，哪些url不需要保护
                .antMatchers("/").authenticated()
                .antMatchers("/home").authenticated()
                .and()
                .sessionManagement().maximumSessions(1)
                .and()
                .and()
                .logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login")
                .deleteCookies("JSESSIONID")    //退出时要删除的Cookies的名字
                .and()
                .formLogin()
                .loginPage("/login")  //定义当需要用户登录时候，转到的登录页面
                .loginProcessingUrl("/login_check")  // 自定义的登录接口

                .permitAll()
                //.defaultSuccessUrl("/home").permitAll()    //不注释掉无法跳转

                .and()
                .logout()
                .permitAll()
                // 自动登录
                .and().rememberMe();


        http.csrf().disable();
        //开启跨域访问
        http.cors().disable();
        //开启模拟请求，比如API POST测试工具的测试，不开启时，API POST为报403错误

        //解决中文乱码问题
        CharacterEncodingFilter filter = new CharacterEncodingFilter();
        filter.setEncoding("UTF-8");
        filter.setForceEncoding(true);
        http.addFilterBefore(filter, CsrfFilter.class);
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth)throws Exception{
        /*  这段代码是直接在内存中放一个账户并验证
        auth.inMemoryAuthentication()
                .withUser("admin")
                .password(ENCODER.encode("123"))
                .roles("Admin");

        */
        auth.userDetailsService(myUserDetailsService()).passwordEncoder(new PasswordEncoder() {
            @Override
            public String encode(CharSequence charSequence) {
                System.out.println("encode: "+ENCODER.encode(charSequence));
                return ENCODER.encode(charSequence);
            }

            //密码匹配，看输入的密码经过加密与数据库中存放的是否一样
            @Override
            public boolean matches(CharSequence charSequence, String s) {
                return ENCODER.matches(charSequence,s);
            }
        });


    }
}
