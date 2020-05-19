package com.litnwu.demo.web;

import com.litnwu.demo.dao.PostDao;
import com.litnwu.demo.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
public class BlogController
{
	@Autowired
	private PostDao postDao;

	@GetMapping("/blog")
	public String blogPage(Model model)
	{
		List<Post> posts = postDao.getLatest20();
		int show_len = 100;
		for(int i=0;i<posts.size();i++){
			Post temp = posts.get(i);
			if(temp.getContext().length()>show_len) {
				temp.setContext(temp.getContext().substring(0, show_len));
				posts.set(i, temp);
			}
		}

		model.addAttribute("MyPosts",posts);
		return "blog";
	}

	@GetMapping("/blog_{post_id}")
	public String singlePost(@PathVariable("post_id") Long post_id, Model model)
	{
		Post post = postDao.getPostById(post_id);
		model.addAttribute("myPost",post);
		return "blog_single";
	}

}
