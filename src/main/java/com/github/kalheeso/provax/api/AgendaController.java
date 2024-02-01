package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Agenda;
import com.github.kalheeso.provax.service.AgendaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/agenda")
public class AgendaController {
    private final AgendaService agendaService;

    public AgendaController(AgendaService agendaService) {
        this.agendaService = agendaService;
    }

    @GetMapping
    public Iterable<Agenda> getAgendas() {
        return agendaService.findAll();
    }

    @PostMapping
    public Agenda createAgenda(Agenda agenda) {
        return agendaService.create(agenda);
    }

    @DeleteMapping
    public void deleteAgenda(Agenda agenda) {
        agendaService.delete(agenda);
    }
}
