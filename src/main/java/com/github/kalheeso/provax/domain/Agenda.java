package com.github.kalheeso.provax.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Entity
public class Agenda {
    @Setter(onMethod_ = @Deprecated)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    // Data e Hora do agendamento
    private LocalDateTime dataHora;
    private String situacao;
    private String dataSituacao;
    private String obervacao;

    @ManyToOne
    @JoinColumn(nullable = false, name = "vacina_id")
    private Vacina vacina;

    @ManyToOne
    @JoinColumn(nullable = false, name = "usuario_id")
    private Usuario usuario;
}
