package com.github.kalheeso.provax.service;

import com.github.kalheeso.provax.domain.Agenda;
import com.github.kalheeso.provax.domain.Situacao;
import com.github.kalheeso.provax.repository.AgendaRepository;
import org.springframework.stereotype.Service;

@Service
public class AgendaService {
    private final AgendaRepository agendaRepository;

    public AgendaService(AgendaRepository agendaRepository) {
        this.agendaRepository = agendaRepository;
    }

    public Iterable<Agenda> findAll() {
        return agendaRepository.findAll();
    }

    public void updateSituacao(long id, String situacao, String observacoes) throws IllegalArgumentException {
        Agenda agenda = agendaRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Agenda não encontrada"));
        agenda.setSituacao(Situacao.valueOf(situacao.toUpperCase()));
        agenda.setObervacoes(observacoes);
        agendaRepository.save(agenda);
    }

    public Agenda save(Agenda agenda) {
        return agendaRepository.save(agenda);
    }
    public void delete(Agenda agenda) {
        agendaRepository.delete(agenda);
    }
}
