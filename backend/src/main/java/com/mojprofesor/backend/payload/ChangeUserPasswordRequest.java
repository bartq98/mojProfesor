package com.mojprofesor.backend.payload;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

@Data
public class ChangeUserPasswordRequest {
    @NotBlank
    @Length(min = 8, max = 20)
    private String password;
}
