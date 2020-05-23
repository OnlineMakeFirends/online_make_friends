package com.litnwu.demo.service;

import com.litnwu.demo.dao.userDao;
import com.litnwu.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {
    private final userDao userDao;
    @Autowired
    public SearchService(userDao userDao) {
        this.userDao = userDao;
    }

    public List<User> Search(String city, Integer age, String education)
    {
        return  userDao.Search(city, age, education);
    }

}
