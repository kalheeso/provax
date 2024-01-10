package com.github.kalheeso.provax.repository;

import com.github.kalheeso.provax.domain.Usuario;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
}
