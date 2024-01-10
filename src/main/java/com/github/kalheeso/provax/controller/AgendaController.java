package com.github.kalheeso.provax.controller;

import com.github.kalheeso.provax.domain.Agenda;
import com.github.kalheeso.provax.service.AgendaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path ="/agenda")
public class AgendaController {
    private final AgendaService agendaService;

    public AgendaController(AgendaService agendaService) {
        this.agendaService = agendaService;
    }

    @GetMapping
    public Iterable<Agenda> getUsuarios() {
        return agendaService.findAll();
    }
}
