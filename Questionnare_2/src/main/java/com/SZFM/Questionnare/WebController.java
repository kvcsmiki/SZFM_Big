package com.SZFM.Questionnare;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.stereotype.Controller;

@Controller
public class WebController {

    @GetMapping
    public String test(Model model){
        return "test";
    }

    @GetMapping("/teszt2")
    public String test2(){
        return "test2";
    }
}
