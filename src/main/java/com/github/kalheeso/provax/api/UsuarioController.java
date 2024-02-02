package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Usuario;
import com.github.kalheeso.provax.service.UsuarioService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/usuario")
public class UsuarioController {
    private final UsuarioService usuarioService;

    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public Iterable<Usuario> getUsuarios() {
        return usuarioService.findAll();
    }

    @GetMapping("/{email}")
    public ResponseEntity findByEmail(@PathVariable("email") String email) {
        Usuario usuario;
        try {
            usuario = usuarioService.findByEmail(email);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Erro ao buscar usuario: " + e.getMessage());
        }

        return ResponseEntity.ok(usuario);
    }
}