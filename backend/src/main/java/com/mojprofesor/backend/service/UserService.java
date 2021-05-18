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
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void addUser(@NonNull AddUserRequest request) throws UserAlreadyExistsException {
        boolean alreadyExists = userRepository.existsByEmail(request.getEmail());

        if(alreadyExists) {
            throw new UserAlreadyExistsException("User already exists");
        }

        UserEntity userEntity = UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();

        userRepository.save(userEntity);
    }

    public UserResponse getUser(@NonNull Long id) throws NotFoundException {
        Optional<UserEntity> user = userRepository.findById(id);

        UserEntity userEntity = user.orElseThrow(() ->  new NotFoundException(String.format("Not found user of id: %d", id)));

        return UserResponse.of(userEntity);
    }

    public void updateUserPassword(@NonNull Long id, @NonNull ChangeUserPasswordRequest request) throws NotFoundException, SamePasswordException {
        UserEntity user = userRepository
                .findById(id).orElseThrow(() ->  new NotFoundException(String.format("Not found user of id: %d", id)));

        if(!passwordEncoder.matches(user.getPassword(), request.getPassword())) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            userRepository.save(user);
        }
        else {
            throw new SamePasswordException("Password is the same as the previous");
        }
    }

    public void deleteUser(@NonNull Long id) throws NotFoundException {
        if(!userRepository.existsById(id)) {
            throw new NotFoundException(String.format("Not found user of id: %d", id));
        }

        userRepository.deleteById(id);
    }

    public UserResponse getUserByPrincipal(Principal principal) throws NotFoundException {
        UserEntity user = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() ->
                        new NotFoundException(String.format("Not found user of email: %s", principal.getName())));

        return UserResponse.of(user);
    }
}

