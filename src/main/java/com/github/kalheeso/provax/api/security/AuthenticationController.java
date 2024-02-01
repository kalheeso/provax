package com.github.kalheeso.provax.api.security;

import com.github.kalheeso.provax.service.UsuarioService;
import com.github.kalheeso.provax.utils.dto.LoginRequestDTO;
import com.github.kalheeso.provax.utils.dto.LoginResponseDTO;
import com.github.kalheeso.provax.utils.dto.UsuarioRequestDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/auth")
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
    public ResponseEntity login(@RequestBody LoginRequestDTO loginDTO) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(loginDTO.username(), loginDTO.password());
        var authentication = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((Login) authentication.getPrincipal());
        var tempoDeExpiracao = tokenService.getTempoDeExpiracao();

        return ResponseEntity.ok(new LoginResponseDTO(token, tempoDeExpiracao));
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody UsuarioRequestDTO usuarioRequestDTO) {
        try{
            usuarioService.saveUsuario(usuarioRequestDTO);
            return ResponseEntity.ok("Usuário registrado com sucesso!");

        } catch(IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Erro ao criar usuário: " + e.getMessage());
        }
    }
}