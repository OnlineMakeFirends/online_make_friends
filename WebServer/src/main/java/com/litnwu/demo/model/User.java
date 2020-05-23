package com.litnwu.demo.model;


import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import sun.security.util.Password;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
@Data
public class User implements UserDetails {
    private Integer id;
    @NotBlank(message = "用户名不为空!")
    @NotNull
    @Size(max = 10,message = "用户名最长为10个字符！")
    private String name;
    @NotNull
    @Size(min=6,max = 20,message = "密码长度：6~20个字符！")
    private String passwd;

    private String sexy;
    private Integer age;
    private String city;
    private String education;

    public User(String name, String passwd){
        this.name = name;
        this.passwd = passwd;
    }


    //不涉及用户角色，直接赋予管理员角色
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> auths = new ArrayList<>();
        auths.add(new SimpleGrantedAuthority("USER"));
        return auths;
    }

    @Override
    public String getPassword() {
        return passwd;
    }

    @Override
    public String getUsername() {
        return name;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
