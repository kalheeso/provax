package com.github.kalheeso.provax.service;

import com.github.kalheeso.provax.domain.Usuario;
import com.github.kalheeso.provax.repository.UsuarioRepository;
import com.github.kalheeso.provax.utils.BCryptHasher;
import com.github.kalheeso.provax.utils.dto.UsuarioRequestDTO;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    public Iterable<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    public void saveUsuario(UsuarioRequestDTO usuarioRequestDTO) throws IllegalArgumentException {
        if (!isUsuarioValido(usuarioRequestDTO)) {
            throw new IllegalArgumentException("Formato de usuario inválido, os campos 'email', 'password', 'nome' e 'role' são obrigatórios");
        }
        if (usuarioExistsByEmail(usuarioRequestDTO.email())) {
            throw new IllegalArgumentException("Email já cadastrado");
        }

        String passwordHash = new BCryptHasher().encode(usuarioRequestDTO.password());

        Usuario usuario = new Usuario(usuarioRequestDTO.email(), passwordHash, usuarioRequestDTO.role(), usuarioRequestDTO.nome(), usuarioRequestDTO.dataNascimento(), usuarioRequestDTO.sexo(), usuarioRequestDTO.logradouro(), usuarioRequestDTO.numero(), usuarioRequestDTO.setor(), usuarioRequestDTO.cidade(), usuarioRequestDTO.uf());

        usuarioRepository.save(usuario);
    }

    private boolean isUsuarioValido(UsuarioRequestDTO usuarioRequestDTO) {
        return usuarioRequestDTO != null && usuarioRequestDTO.password() != null  && usuarioRequestDTO.email() != null && usuarioRequestDTO.role() != null;
    }

    public boolean usuarioExistsByEmail(String email) throws IllegalArgumentException{
        if (email == null) {
            throw new IllegalArgumentException("O parametro 'email' não pode ser nulo");
        }
        return usuarioRepository.existsByEmail(email);
    }

    public Usuario findByEmail(String email) {
        if (email == null) {
            throw new IllegalArgumentException("O parametro 'nickname' não pode ser nulo");
        }
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);

        if (usuario.isPresent()) {
            return usuario.get();
        }
        throw new IllegalArgumentException("Usuario não encotrado. Nickname: " + email);
    }
}
