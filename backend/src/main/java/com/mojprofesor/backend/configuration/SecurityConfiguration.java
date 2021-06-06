package com.mojprofesor.backend.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mojprofesor.backend.configuration.jwt.AuthenticationFailureHandler;
import com.mojprofesor.backend.configuration.jwt.AuthenticationSuccessHandler;
import com.mojprofesor.backend.configuration.jwt.JsonAuthenticationFilter;
import com.mojprofesor.backend.configuration.jwt.JwtAuthorizationFilter;
import com.mojprofesor.backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

import javax.servlet.http.HttpServletResponse;

import static com.mojprofesor.backend.entity.UserRole.ROLE_ADMIN;
import static com.mojprofesor.backend.entity.UserRole.ROLE_USER;

@Configuration
@RequiredArgsConstructor
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final ObjectMapper objectMapper;
    private final AuthenticationFailureHandler failureHandler;
    private final AuthenticationSuccessHandler successHandler;
    private final AuthService authService;
    @Value("${jwt.secret}")
    private String secret;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(authService).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http
                .authorizeRequests()
                .antMatchers("/swagger-resources/**", "/v2/api-docs", "/swagger-ui/**", "/webjars/**").permitAll()
                .antMatchers(HttpMethod.POST, "/user").permitAll()
                .antMatchers(HttpMethod.GET, "/", "/user", "/user/*").permitAll()
                .antMatchers(HttpMethod.DELETE, "/user/*").hasAnyRole(ROLE_USER.getRoleName(), ROLE_ADMIN.getRoleName())
                .antMatchers(HttpMethod.GET, "/opinions/*", "/opinions/professor/*").permitAll()
                .antMatchers(HttpMethod.POST, "/opinions").hasAnyRole(ROLE_USER.getRoleName(), ROLE_ADMIN.getRoleName())
                .antMatchers(HttpMethod.GET, "/like/*/amount").permitAll()
                .antMatchers(HttpMethod.POST, "/like").hasAnyRole(ROLE_USER.getRoleName(), ROLE_ADMIN.getRoleName())
                .antMatchers(HttpMethod.GET, "/professor", "/professor/*", "/professor/*/*").permitAll()
                .antMatchers(HttpMethod.POST, "/professor").hasAnyRole(ROLE_USER.getRoleName(), ROLE_ADMIN.getRoleName())
                .anyRequest().authenticated()
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .and()
                .addFilter(authenticationFilter())
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), authService, secret))
                .exceptionHandling()
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .logout(logout -> logout
                        .permitAll()
                        .logoutSuccessHandler(
                                (request, response, authentication) -> response.setStatus(HttpServletResponse.SC_OK)
                        )
                );

    }

    public JsonAuthenticationFilter authenticationFilter() throws Exception {
        var authenticationFilter = new JsonAuthenticationFilter(objectMapper);
        authenticationFilter.setAuthenticationSuccessHandler(successHandler);
        authenticationFilter.setAuthenticationFailureHandler(failureHandler);
        authenticationFilter.setAuthenticationManager(super.authenticationManager());
        return authenticationFilter;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
