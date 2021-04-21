package com.mojprofesor.backend.payload;

import com.mojprofesor.backend.entity.UserRole;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.*;

@Data
public class AddUserRequest {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Length(min = 8, max = 20)
    private String password;

    @NotNull
    private UserRole role;
}
