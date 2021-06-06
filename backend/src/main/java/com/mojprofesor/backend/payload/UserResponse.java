package com.mojprofesor.backend.payload;

import com.mojprofesor.backend.entity.UserEntity;
import lombok.Data;

@Data
public class UserResponse {

    private final long id;

    private final String email;

    public static UserResponse of(UserEntity userEntity) {
        return new UserResponse(
          userEntity.getId(),
          userEntity.getEmail()
        );
    }
}
