package com.github.kalheeso.provax.controller;

import com.github.kalheeso.provax.domain.Vacina;
import com.github.kalheeso.provax.service.VacinaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path ="/vacina")
public class VacinaController {
    private final VacinaService vacinaService;

    public VacinaController(VacinaService vacinaService) {
        this.vacinaService = vacinaService;
    }

    @GetMapping
    public Iterable<Vacina> getUsuarios() {
        return vacinaService.findAll();
    }
}
