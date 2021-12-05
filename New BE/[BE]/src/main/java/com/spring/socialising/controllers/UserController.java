package com.spring.socialising.controllers;

import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/rest/user")
public class UserController {
    private final MessageSource messageSource;

    public UserController( MessageSource messageSource) {
        this.messageSource = messageSource;
    }

}
