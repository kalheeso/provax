package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Agenda;
import com.github.kalheeso.provax.service.AgendaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

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
        return agendaService.save(agenda);
    }

    @PutMapping
    public ResponseEntity updateSituacao(@RequestParam("id") long id, @RequestParam("situacao") String situacao, @RequestParam("observacoes") String observacoes) {
        try {
            agendaService.updateSituacao(id, situacao, observacoes);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Erro ao atualizar situação: " + e.getMessage());
        }

        return ResponseEntity.ok("Situação atualizada com sucesso");
    }

    @DeleteMapping
    public void deleteAgenda(Agenda agenda) {
        agendaService.delete(agenda);
    }
}
