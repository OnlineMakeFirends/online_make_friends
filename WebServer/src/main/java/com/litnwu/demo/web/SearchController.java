package com.litnwu.demo.web;

import com.litnwu.demo.model.User;
import com.litnwu.demo.service.SearchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class SearchController {
    private final SearchService searchService;
    @Autowired
    public SearchController(SearchService userService) {
        this.searchService = userService;
    }

    @PostMapping("/search")
    @ResponseBody
    public List<User> Search(String city, Integer age, String education) {
        return searchService.Search(city, age, education);
    }
    @GetMapping("/search_girls")
    public String SearchGirls() {
        return "search_girls";
    }
}
