package com.litnwu.demo.web;

import com.litnwu.demo.dao.PostDao;
import com.litnwu.demo.json.JsonData;
import com.litnwu.demo.model.Post;
import com.litnwu.demo.model.User;
import com.litnwu.demo.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;
import java.util.List;

@Controller
public class PostController
{
	@Autowired
	private PostService postService;

	@GetMapping("/post_categories_{categories}")
	public String postPage(@PathVariable("categories") String categories,Model model)
	{
		List<Post> posts = postService.getAll(categories);
		int show_len = 100;
		for(int i=0;i<posts.size();i++){
			Post temp = posts.get(i);
			if(temp.getContext().length()>show_len) {
				temp.setContext(temp.getContext().substring(0, show_len));
				posts.set(i, temp);
			}
		}
		model.addAttribute("categories",categories);
		model.addAttribute("MyPosts",posts);
		return "blog";
	}

	@GetMapping("/post_get_{categories}_{post_id}")
	public String singlePost(@PathVariable("categories") String categories,@PathVariable("post_id") Long post_id, Model model)
	{
		Post post = postService.getPostById(post_id);
		//System.out.println(post.getContext());
		model.addAttribute("myPost",post);
		model.addAttribute("categories",categories);
		return "blog_single";
	}

	/*
	发帖功能
	 */
	@GetMapping("/post_publish_{categories}")
	public String publishPage(@PathVariable("categories") String categories,Model model)
	{
		Post post = new Post();
		post.setCategories(categories);
		post.setAuthor(SecurityContextHolder.getContext().getAuthentication().getName());

		//System.out.println(post.getAuthor()+" "+post.getCategories());

		model.addAttribute("post", post);
		model.addAttribute("result", new JsonData(510,""));
		model.addAttribute("categories",categories);
		return "blog_publish";
	}

	@PostMapping("/post_submit")
	public String publish(@Valid Post post, Errors errors, Model model)
	{
		JsonData result;


		System.out.println(post.getContext());

		boolean res = postService.createBlog(post.getAuthor(),post.getTitle(),post.getContext(),post.getCategories());
		if(res == true)
			result = new JsonData(200,"发布文章成功！");
		else
			result = new JsonData(300,"发布文章失败！");
		model.addAttribute("result",result);
		model.addAttribute("post",post);
		return "blog_publish";
	}
}
