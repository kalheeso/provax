package com.github.kalheeso.provax.utils.dto;

import java.time.LocalDate;

public record UsuarioDTO(String email, String password, String nome, LocalDate dataNascimento, char sexo, String logradouro, int numero, String setor, String cidade, String uf) {
}