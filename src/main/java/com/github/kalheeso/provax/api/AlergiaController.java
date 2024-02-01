package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Alergia;
import com.github.kalheeso.provax.service.AlergiaService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public Alergia createAlergia(Alergia alergia) {
        return alergiaService.create(alergia);
    }

    @DeleteMapping
    public void deleteAlergia(Alergia alergia) {
        alergiaService.delete(alergia);
    }

}
