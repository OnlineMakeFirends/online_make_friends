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

    @Insert("insert into user (name,passwd) values(#{name},#{passwd})")
    void register(@Param("name") String name,@Param("passwd") String passwd);


    @Select({"<script>",
            "select * from user where 1=1" +
            "<when test='city != null'>" +
            " and city=#{city}" +
            "</when>" +
            "<when test='age != null'>" +
            " and #{age} > age" +
            "</when>" +
            "<when test='education != null'>" +
            " and #{education} = education" +
            "</when>",
            "</script>"})
    List<User> Search(@Param("city") String city, @Param("age") Integer age, @Param("education") String education);
}

/*创建表
CREATE TABLE `user` (
  `id` bigint(32) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
 */