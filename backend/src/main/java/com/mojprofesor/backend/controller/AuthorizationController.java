package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.payload.AuthenticationRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthorizationController {

    @PostMapping("/login")
    public void login(@RequestBody AuthenticationRequest authenticationRequest) {

    }
}
