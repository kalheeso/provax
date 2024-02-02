package com.github.kalheeso.provax.api.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    @Value("${api.security.jwt.secret}")
    private String secret;

    // Em minutos
    private final int tempoDeExpiracao = 15;
    public String generateToken(Login login) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                    .withIssuer("construcao")
                    .withSubject(login.getUsername())
                    .withExpiresAt(getExpirantionDate())
                    .sign(algorithm);

            return token;
        } catch (JWTCreationException exception) {
            throw new RuntimeException("Erro enquanto gera o token" + exception);
        }
    }

    public String validateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("construcao")
                    .build()
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException exception) {
            return "";
        }
    }

    /**
     * Fornece o instante de expiração do token no horário de Greenwich
     *
     * @return Instante de expiração do token no horário de Greenwich
     */
    private Instant getExpirantionDate() {
        return LocalDateTime.now().plusMinutes(tempoDeExpiracao)
                .toInstant(ZoneOffset.of("-03:00"));
    }

    /**
     * Fornecer o tempo de expiração do token no horário de Brasília
     *
     * @return Instante de expiração do token no horário de Brasília
     */
    public String getTempoDeExpiracao() {
        return LocalDateTime.now().plusMinutes(tempoDeExpiracao).toString();


    }
}