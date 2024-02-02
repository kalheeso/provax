package com.github.kalheeso.provax.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.SecureRandom;

public final class BCryptHasher implements PasswordEncoder {
    private static final int STRENGTH = 10;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(STRENGTH, new SecureRandom());

    public String encode(CharSequence rawPassword) {
        return encoder.encode(rawPassword);
    }

    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encoder.matches(rawPassword, encodedPassword);
    }
}