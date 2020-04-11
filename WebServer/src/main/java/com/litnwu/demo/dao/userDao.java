package com.litnwu.demo.dao;


import com.litnwu.demo.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface userDao {
    @Select("select * from user where name=#{name}")
    User Login(@Param("name") String name);

    @Insert("insert into user (name,passwd) values(#{name},#{passwd})")
    void register(@Param("name") String name,@Param("passwd") String passwd);
}

/*创建表
CREATE TABLE `user` (
  `id` bigint(32) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
 */