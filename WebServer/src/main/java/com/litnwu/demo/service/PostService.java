package com.litnwu.demo.service;

import com.litnwu.demo.dao.PostDao;
import com.litnwu.demo.json.JsonData;
import com.litnwu.demo.model.Post;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class PostService
{
	@Autowired
	private PostDao postDao;

	public Post getPostById(Long post_id){
		return postDao.getPostById(post_id);
	}

	public boolean createBlog(String author,String title,String context,String categories)
	{
		Set cate = new HashSet();
		cate.add("blog");
		cate.add("sport");
		cate.add("game");
		cate.add("free");

		//System.out.println(author+" "+categories);

		if(cate.contains(categories)){
			postDao.createBlog(author,title,context,categories);
			return true;
		}
		return false;
	}

	public List<Post> getLatest20(String categories)
	{
		return postDao.getLatest20(categories);
	}
	public List<Post> getAll(String categories)
	{
		return postDao.getAll(categories);
	}

}
