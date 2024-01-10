package com.github.kalheeso.provax.domain;

import jakarta.persistence.*;

import lombok.Data;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class Usuario {
    @Setter(onMethod_ = @Deprecated)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private LocalDate dataNascimento;
    private char sexo;
    private String logradouro;
    private int numero;
    private String setor;
    private String cidade;
    private String uf;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "usuario_alergia",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "alergia_id")
    )
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Set<Alergia> alergias = new HashSet<>();
}
