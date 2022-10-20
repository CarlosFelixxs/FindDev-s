package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.models.Desenvolvedor;
import projetopi.finddevservice.repositories.DesenvolvedorRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/dev")
public class DesenvolvedorController {

    @Autowired
    private DesenvolvedorRepository repository;

    @PostMapping
    public ResponseEntity<Desenvolvedor> save(@RequestBody @Valid Desenvolvedor dev) {
        repository.save(dev);

        return ResponseEntity.status(201).body(dev);
    }

    @GetMapping
    public ResponseEntity<List<Desenvolvedor>> getAll() {
        List<Desenvolvedor> desenvolvedor = repository.findAll();

        return desenvolvedor.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(desenvolvedor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Desenvolvedor> getById(@PathVariable(value = "id") UUID id){
        Desenvolvedor desenvolvedor = repository.findById(id).orElse(null);
        return desenvolvedor == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(desenvolvedor);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Desenvolvedor> delete(@PathVariable(value = "id") UUID id){
        Desenvolvedor desenvolvedor = repository.deleteByIdUsuario(id);
        return desenvolvedor == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(desenvolvedor);
    }
}
