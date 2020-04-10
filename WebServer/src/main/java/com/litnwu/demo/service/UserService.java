package com.litnwu.demo.service;


import com.litnwu.demo.json.JsonData;
import com.litnwu.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.litnwu.demo.dao.userDao;

@Service
public class UserService {
    @Autowired
    private userDao userDao;
    public User findByName(String name)
    {
        return  userDao.Login(name);
    }

    public JsonData regist(User user){
        JsonData result= new JsonData(200,"0");
        //userDao.register(user);

        return result;
    }
}
