package com.github.kalheeso.provax.domain;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;

@Data
@Entity
public class Alergia {
    @Setter(onMethod_ = @Deprecated)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;

    protected Alergia() {}
}
