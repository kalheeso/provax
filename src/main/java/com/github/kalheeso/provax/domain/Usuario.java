package com.github.kalheeso.provax.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Entity
public class Usuario {
    @Setter(onMethod_ = @Deprecated)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false)
    private String email;
    @JsonIgnore
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private UsuarioRole role;
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

    protected Usuario() {
    }

    public Usuario(String email, String password, UsuarioRole role, String nome, LocalDate dataNascimento, char sexo, String logradouro, int numero, String setor, String cidade, String uf) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.logradouro = logradouro;
        this.numero = numero;
        this.setor = setor;
        this.cidade = cidade;
        this.uf = uf;
        this.alergias = new HashSet<>();
    }

    public void addAlergia(Alergia alergia) {
        alergias.add(alergia);
    }

    public void removeAlergia(Alergia alergia) {
        alergias.remove(alergia);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Usuario usuario = (Usuario) o;

        if (!email.equals(usuario.email)) return false;
        return password.equals(usuario.password);
    }

    @Override
    public int hashCode() {
        int result = email.hashCode();
        result = 31 * result + password.hashCode();
        return result;
    }
}
