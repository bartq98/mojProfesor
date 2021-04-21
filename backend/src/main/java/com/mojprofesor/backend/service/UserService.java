package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.UserEntity;
import com.mojprofesor.backend.exception.SamePasswordException;
import com.mojprofesor.backend.exception.UserAlreadyExistsException;
import com.mojprofesor.backend.payload.AddUserRequest;
import com.mojprofesor.backend.payload.ChangeUserPasswordRequest;
import com.mojprofesor.backend.payload.UserResponse;
import com.mojprofesor.backend.repository.UserRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    public final UserRepository userRepository;

    public UserService(UserRepository userRepository) { this.userRepository = userRepository; }

    public void addUser(@NonNull AddUserRequest request) throws UserAlreadyExistsException {
        boolean alreadyExists = userRepository.existsByEmail(request.getEmail());

        if(alreadyExists) {
            throw new UserAlreadyExistsException("User already exists");
        }

        UserEntity userEntity = UserEntity.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .role(request.getRole())
                .build();

        userRepository.save(userEntity);
    }

    public UserResponse getUser(@NonNull long id) throws NotFoundException {
        Optional<UserEntity> user = userRepository.findById(id);

        UserEntity userEntity = user.orElseThrow(() ->  new NotFoundException(String.format("Not found user of id: %d", id)));

        return UserResponse.of(userEntity);
    }

    public void updateUserPassword(@NonNull long id, @NonNull ChangeUserPasswordRequest request) throws NotFoundException, SamePasswordException {
        Optional<UserEntity> user = userRepository.findById(id);

        UserEntity userEntity = user.orElseThrow(() ->  new NotFoundException(String.format("Not found user of id: %d", id)));

        if(!userEntity.getPassword().equals(request.getPassword())) {
            userEntity.setPassword(request.getPassword());
            userRepository.save(userEntity);
        }
        else {
            throw new SamePasswordException("Password is the same as the previous");
        }
    }

    public void deleteUser(@NonNull long id) throws NotFoundException {
        if(!userRepository.existsById(id)) {
            throw new NotFoundException(String.format("Not found user of id: %d", id));
        }

        userRepository.deleteById(id);
    }
}

