package com.litnwu.demo.dao;


import com.litnwu.demo.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface userDao {
    @Select("select * from user where name=#{name} and passwd=#{passwd}")
    User Login(@Param("name") String name, @Param("passwd") String passwd);
}
