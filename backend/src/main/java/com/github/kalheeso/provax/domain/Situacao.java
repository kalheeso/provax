package com.github.kalheeso.provax.domain;

import lombok.Getter;

@Getter
public enum Situacao {
    AGENDADO("agendado"),
    CANCELADO("cancelado"),
    REALIZADO("realizado");

    private final String situacao;

    Situacao(String situacao) {
        this.situacao = situacao;
    }
}
