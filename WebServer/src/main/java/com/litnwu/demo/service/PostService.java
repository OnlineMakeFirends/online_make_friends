package com.litnwu.demo.service;

import com.litnwu.demo.dao.PostDao;
import com.litnwu.demo.model.Post;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService
{
	@Autowired
	private PostDao postDao;

	public Post getPostById(Long post_id){
		return postDao.getPostById(post_id);
	}


}
