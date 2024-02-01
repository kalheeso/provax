package com.github.kalheeso.provax.api.security;

import com.github.kalheeso.provax.domain.Usuario;
import com.github.kalheeso.provax.repository.UsuarioRepository;
import com.github.kalheeso.provax.utils.dto.LoginRequestDTO;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
public class SecurityFilter extends OncePerRequestFilter {
    UsuarioRepository usuarioRepository;
    TokenService tokenService;

    public SecurityFilter(TokenService tokenService, UsuarioRepository usuarioRepository) {
        this.tokenService = tokenService;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = recoverToken(request);

        if (token != null) {
            var subject = tokenService.validateToken(token);
            Optional<Usuario> usuario = usuarioRepository.findByEmail(subject);
            if (usuario.isEmpty()) {
                throw new ServletException("Usuário não encontrado");
            }

            UserDetails login = LoginRequestDTO.usuarioToLogin(usuario.get());

            var authentication = new UsernamePasswordAuthenticationToken(login, null, login.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }

    private String recoverToken(HttpServletRequest request) {
        var authHeader = request.getHeader("Authorization");
        if (authHeader == null ||   !authHeader.startsWith("Bearer ")) {
            return null;
        }

        return authHeader.replace("Bearer ", "");
    }
}

