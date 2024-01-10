package com.github.kalheeso.provax.service;

import com.github.kalheeso.provax.domain.Agenda;
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
}
