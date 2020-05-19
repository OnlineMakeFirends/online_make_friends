package com.litnwu.demo.dao;

import com.litnwu.demo.model.Post;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PostDao
{
	@Insert("insert into blogs (author,context) values(#{author},#{context})")
	void createBlog(@Param("author") String author, @Param("context") String context);

	@Select("select * from blogs where post_id=#{post_id}")
	Post getPostById(@Param("post_id") Long post_id);

	@Select("select * from ( select * from blogs order by time desc limit 0,20 ) as a order by time")
	List<Post> getLatest20();
}


/*
create table blogs(
	post_id int not null auto_increment primary key,
	author varchar(10),
	title varchar(10),
	context varchar(3000),
	time datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

 insert into blogs(author,title, context)
    values( "吴怡林","这是一篇文章3","
    wegnlwenvldna;dsvmsdlvmfsdvmblkfdbkl cdlnvkjbnwiojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmfojfowi ejofhweoignoregnoerngenrlfld
    egnlwenvldna;dsvmsdlvmf");
 */