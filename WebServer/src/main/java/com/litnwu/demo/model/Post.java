package com.litnwu.demo.model;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Timestamp;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
@Data
public class Post
{
	private Long post_id;

	@NotBlank(message = "作者不能为空")
	private String author;

	@Size(min=1,max=3000,message = "文章字数1~3000")
	private String context;

	@NotBlank(message = "标题不能为空")
	private String title;

	private Timestamp time;

	public Post(String author, String context)
	{
		this.author = author;
		this.context = context;
	}
}
