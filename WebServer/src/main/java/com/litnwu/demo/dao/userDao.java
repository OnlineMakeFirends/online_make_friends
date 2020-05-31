package com.litnwu.demo.dao;


import com.litnwu.demo.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface userDao {
    @Select("select * from user where name=#{name}")
    User Login(@Param("name") String name);

    @Insert("insert into user (name,passwd,age,city,education, sexy,phone) values(#{name},#{passwd},#{age},#{city},#{education}, #{sexy},#{phone})")
    void register(@Param("name") String name,@Param("passwd") String passwd, @Param("age") Integer age,@Param("city") String city,@Param("education") String education,@Param("sexy") String sexy,@Param("phone") String phone);


    @Select({"<script>",
            "select * from user where 1=1",
            "<when test='!city.isEmpty()'>",
            " and city=#{city}",
            "</when>",
            "<when test='age != null'>",
            " and #{age}+3 &gt;= age and #{age}-3 &lt;= age",
            "</when>",
            "<when test='!education.isEmpty()'>",
            " and #{education} = education",
            "</when>",
            "</script>"})
    List<User> Search(@Param("city") String city, @Param("age") Integer age, @Param("education") String education);
}

/*创建表
CREATE TABLE `user`(
  `id` bigint(32) NOT NULL AUTO_INCREMENT,
 `name` varchar(255) DEFAULT NULL,
`sexy` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `age` bigint(32),
  `phone` varchar(255) DEFAULT NULL,
 `education` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
 */