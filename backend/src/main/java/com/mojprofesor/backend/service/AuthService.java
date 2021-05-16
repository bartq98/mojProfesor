package com.mojprofesor.backend.service;

import com.mojprofesor.backend.entity.UserDetailsImpl;
import com.mojprofesor.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var user = userRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User: " + username + "not exist!"));
        return new UserDetailsImpl(user);
    }

    public UserDetails loadUserById(String userId) {
        var user = userRepository.findById(Long.valueOf(userId)).orElseThrow(() -> new UsernameNotFoundException("User: " + userId + "not exist!"));
        return new UserDetailsImpl(user);
    }
}
