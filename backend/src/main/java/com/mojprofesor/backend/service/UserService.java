package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.UserEntity;
import com.mojprofesor.backend.entity.UserRole;
import com.mojprofesor.backend.exception.SamePasswordException;
import com.mojprofesor.backend.exception.UserAlreadyExistsException;
import com.mojprofesor.backend.payload.AddUserRequest;
import com.mojprofesor.backend.payload.ChangeUserPasswordRequest;
import com.mojprofesor.backend.payload.UserResponse;
import com.mojprofesor.backend.repository.UserRepository;
import javassist.NotFoundException;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public void addUser(@NonNull AddUserRequest request, Principal principal) throws UserAlreadyExistsException,
            AccessDeniedException, NotFoundException {
        if (request.getRole().equals(UserRole.ROLE_ADMIN)) {
            if (Objects.isNull(principal)) {
                throw new AccessDeniedException("Only admin user can create admin accounts.");
            }

            UserEntity userEntity = userRepository.findByEmail(principal.getName())
                    .orElseThrow(() -> new NotFoundException(
                            String.format("Not found user of email: %s", principal.getName())));
            if (!userEntity.getRole().equals(UserRole.ROLE_ADMIN)) {
                throw new AccessDeniedException("Only admin user can create admin accounts.");
            }
        }

        boolean alreadyExists = userRepository.existsByEmail(request.getEmail());

        if (alreadyExists) {
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

        UserEntity userEntity = user.orElseThrow(() ->
                new NotFoundException(String.format("Not found user of id: %d", id)));

        return UserResponse.of(userEntity);
    }

    public void updateUserPassword(@NonNull Long id, @NonNull ChangeUserPasswordRequest request, Principal principal)
            throws NotFoundException, SamePasswordException {
        UserEntity principalEntity = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() -> new NotFoundException(
                        String.format("Not found principal of email: %s", principal.getName())));

        UserEntity user = userRepository
                .findById(id).orElseThrow(() ->  new NotFoundException(String.format("Not found user of id: %d", id)));

        if (!principalEntity.getRole().equals(UserRole.ROLE_ADMIN) && principalEntity.getId() != id) {
            throw new AccessDeniedException(
                    String.format("Cannot change password of user of id: %d. Principal is not a admin or owner of user.", id)
            );
        }

        if(!passwordEncoder.matches(user.getPassword(), request.getPassword())) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            userRepository.save(user);
        }
        else {
            throw new SamePasswordException("Password is the same as the previous");
        }
    }

    public void deleteUser(@NonNull Long id, Principal principal) throws NotFoundException {
        UserEntity principalEntity = userRepository
                .findByEmail(principal.getName())
                .orElseThrow(() -> new NotFoundException(
                        String.format("Not found principal of email: %s", principal.getName())));

        if(!userRepository.existsById(id)) {
            throw new NotFoundException(String.format("Not found user of id: %d", id));
        }

        if (!principalEntity.getRole().equals(UserRole.ROLE_ADMIN) && principalEntity.getId() != id) {
            throw new AccessDeniedException(
                    String.format("Cannot delete user of id: %d. Principal is not a admin or owner of user.", id)
            );
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

