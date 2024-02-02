package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Vacina;
import com.github.kalheeso.provax.service.VacinaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/vacina")
@CrossOrigin(origins = "http://localhost:4200")
public class VacinaController {
    private final VacinaService vacinaService;

    public VacinaController(VacinaService vacinaService) {
        this.vacinaService = vacinaService;
    }

    @GetMapping
    public Iterable<Vacina> getVacinas() {
        return vacinaService.findAll();
    }

    @PostMapping
    public Vacina createVacina(Vacina vacina) {
        return vacinaService.create(vacina);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteVacina(@PathVariable("id") Long id) {
        vacinaService.deleteById(id);
    }
}
