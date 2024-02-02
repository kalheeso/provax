package com.github.kalheeso.provax.api;

import com.github.kalheeso.provax.domain.Alergia;
import com.github.kalheeso.provax.service.AlergiaService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path ="/alergia")
@CrossOrigin(origins = "http://143.198.75.125:4200")
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
    public Alergia createAlergia(@RequestBody Alergia alergia) {
        return alergiaService.create(alergia);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteAlergia(@PathVariable("id") Long id) {
        alergiaService.deleteById(id);
    }

}
