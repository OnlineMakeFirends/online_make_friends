package com.litnwu.demo.service;


import com.litnwu.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.litnwu.demo.dao.userDao;

@Service
public class UserService {
    @Autowired
    private userDao userDao;
    public User findByName(String name, String passwd)
    {
        return  userDao.Login(name,passwd);
    }
}
