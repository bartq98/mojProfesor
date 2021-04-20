package com.mojprofesor.backend.controller;

import com.mojprofesor.backend.exception.SamePasswordException;
import com.mojprofesor.backend.exception.UserAlreadyExistsException;
import com.mojprofesor.backend.payload.AddUserRequest;
import com.mojprofesor.backend.payload.ChangeUserPasswordRequest;
import com.mojprofesor.backend.payload.UserResponse;
import com.mojprofesor.backend.service.UserService;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) { this.userService = userService; }

    @PostMapping
    public void addUser(@RequestBody @Valid AddUserRequest request) {
        try{
            userService.addUser(request);
        } catch (UserAlreadyExistsException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

    @GetMapping("/{userId}")
    public UserResponse getUser(@PathVariable long userId){
        try {
            return userService.getUser(userId);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }

    }

    @PatchMapping("/{userId}/password")
    public void updateUserPassword( @PathVariable long userId,
                                    @RequestBody @Valid ChangeUserPasswordRequest request) {
        try{
            userService.updateUserPassword(userId, request);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        } catch (SamePasswordException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, e.getMessage());
        }
    }

    @DeleteMapping("/{userId}")
    public void delUser(@PathVariable long userId) {
        try {
            userService.deleteUser(userId);
        } catch (NotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }
}
