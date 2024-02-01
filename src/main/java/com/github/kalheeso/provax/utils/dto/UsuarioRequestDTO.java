package com.github.kalheeso.provax.utils.dto;

import com.github.kalheeso.provax.domain.Usuario;
import com.github.kalheeso.provax.domain.UsuarioRole;

import java.time.LocalDate;

public record UsuarioRequestDTO(String email, String password, UsuarioRole role, String nome, LocalDate dataNascimento, char sexo, String logradouro, int numero, String setor, String cidade, String uf) {
}