package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.payload.AuthenticationRequest;
import com.mojprofesor.backend.payload.UserResponse;
import com.mojprofesor.backend.service.UserService;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;

@RestController
public class AuthorizationController {

    private final UserService userService;

    public AuthorizationController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/login")
    public void login(@RequestBody AuthenticationRequest authenticationRequest) {

    }

    @GetMapping("/auth/me")
    public UserResponse getPrincipal(Principal principal) {
        try {
            return userService.getUserByPrincipal(principal);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
