package com.github.kalheeso.provax.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Setter;

@Entity
public class Vacina {
    @Setter(onMethod_ = @Deprecated)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String titulo;
    private String descricao;
    //Quantidade de doses
    private int doses;
    // 1 - dia, 2 - semana, 3 - mes, 4 - ano
    private int periodicidade;
    private int intervalo;
}
