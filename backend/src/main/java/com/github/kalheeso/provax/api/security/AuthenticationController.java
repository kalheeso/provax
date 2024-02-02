package com.github.kalheeso.provax.api.security;

import com.github.kalheeso.provax.domain.Usuario;
import com.github.kalheeso.provax.service.UsuarioService;
import com.github.kalheeso.provax.utils.dto.LoginDTO;
import com.github.kalheeso.provax.utils.dto.LoginResponseDTO;
import com.github.kalheeso.provax.utils.dto.UsuarioDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {
    private final AuthenticationManager authenticationManager;
    private final UsuarioService usuarioService;
    private final TokenService tokenService;

    public AuthenticationController(AuthenticationManager authenticationManager, UsuarioService usuarioService, TokenService tokenService) {
        this.authenticationManager = authenticationManager;
        this.usuarioService = usuarioService;
        this.tokenService = tokenService;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO loginDTO) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(loginDTO.username(), loginDTO.password());
        var authentication = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Login) authentication.getPrincipal());

        Usuario usuario = usuarioService.findByEmail(loginDTO.username());

        var usuarioID = usuario.getId();

        return ResponseEntity.ok(new LoginResponseDTO(token, usuarioID));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UsuarioDTO usuarioDTO) {
        try {
            usuarioService.saveUsuario(usuarioDTO);
            return ResponseEntity.ok("Usuário registrado com sucesso!");

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Erro ao criar usuário: " + e.getMessage());
        }
    }
}