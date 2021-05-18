package com.mojprofesor.backend.configuration.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.mojprofesor.backend.entity.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final String secret;
    private final int cookieMaxAge;

    public AuthenticationSuccessHandler(@Value("${jwt.secret}") String secret,
                                        @Value("${jwt.cookieTime}") int cookieMaxAge) {
        this.secret = secret;
        this.cookieMaxAge = cookieMaxAge;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();
        String token = JWT.create()
                .withSubject(principal.getId())
                .sign(Algorithm.HMAC256(secret));

        var cookie = new Cookie("Authorization", token);
        cookie.setMaxAge(cookieMaxAge);
        response.addCookie(cookie);
    }
}