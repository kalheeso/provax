package com.github.kalheeso.provax.service;

import com.github.kalheeso.provax.domain.Alergia;
import com.github.kalheeso.provax.repository.AlergiaRepository;
import org.springframework.stereotype.Service;

@Service
public class AlergiaService {
    private final AlergiaRepository alergiaRepository;

    public AlergiaService(AlergiaRepository alergiaRepository) {
        this.alergiaRepository = alergiaRepository;
    }

    public Iterable<Alergia> findAll() {
        return alergiaRepository.findAll();
    }

    public Alergia create(Alergia alergia) {
        return alergiaRepository.save(alergia);
    }

    public void deleteById(Long id) {
        alergiaRepository.deleteById(id);
    }
}
