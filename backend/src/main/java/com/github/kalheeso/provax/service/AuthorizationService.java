package com.github.kalheeso.provax.service;

import com.github.kalheeso.provax.domain.Usuario;
import com.github.kalheeso.provax.repository.UsuarioRepository;
import com.github.kalheeso.provax.utils.dto.LoginDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthorizationService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    public AuthorizationService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Usuario> usuario = usuarioRepository.findByEmail(username);
        if (usuario.isEmpty()) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }
        return LoginDTO.usuarioToLogin(usuario.get());
    }
}