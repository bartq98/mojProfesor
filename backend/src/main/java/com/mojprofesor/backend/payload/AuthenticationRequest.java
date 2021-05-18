package com.mojprofesor.backend.payload;

import lombok.Getter;

@Getter
public class AuthenticationRequest {

    private String email;
    private String password;

}
