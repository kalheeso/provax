package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Agenda;
import com.github.kalheeso.provax.service.AgendaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/agenda")
@CrossOrigin(origins = "http://localhost:4200")
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
        return agendaService.save(agenda);
    }

    @PutMapping
    public void updateSituacao(@RequestParam("id") long id, @RequestParam("situacao") String situacao, @RequestParam("observacoes") String observacoes) {
        try {
            agendaService.updateSituacao(id, situacao, observacoes);

        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping
    public void deleteAgenda(Agenda agenda) {
        agendaService.delete(agenda);
    }
}
