package com.litnwu.demo.json;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class JsonData {
    Integer code;
    String msg;
    public JsonData(Integer _code,String _msg){
        code=_code;
        msg=_msg;
    }
}
