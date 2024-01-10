package com.github.kalheeso.provax.controller;

import com.github.kalheeso.provax.domain.Alergia;
import com.github.kalheeso.provax.service.AlergiaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path ="/alergia")
public class AlergiaController {
    private final AlergiaService alergiaService;

    public AlergiaController(AlergiaService alergiaService) {
        this.alergiaService = alergiaService;
    }

    @GetMapping
    public Iterable<Alergia> getAlergias() {
        return alergiaService.findAll();
    }
}
