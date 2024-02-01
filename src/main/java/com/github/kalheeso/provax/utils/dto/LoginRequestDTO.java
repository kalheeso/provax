package com.github.kalheeso.provax.utils.dto;

import com.github.kalheeso.provax.api.security.Login;
import com.github.kalheeso.provax.domain.Usuario;

public record LoginRequestDTO(String username, String password) {

    public static Login usuarioToLogin(Usuario usuario) {
        return new Login(usuario.getEmail(), usuario.getPassword(), usuario.getRole());
    }

}