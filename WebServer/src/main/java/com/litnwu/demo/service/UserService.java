package com.litnwu.demo.service;


import com.litnwu.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.litnwu.demo.dao.userDao;

@Service
public class UserService {
    private final userDao userDao;
    @Autowired
    public UserService(userDao userDao) {
        this.userDao = userDao;
    }

    public User findByName(String name)
    {
        return  userDao.Login(name);
    }

    public void regist(String name,String passwd,Integer age,String city,String education,String sexy){
        userDao.register(name,passwd,age, city, education, sexy);
    }
}
