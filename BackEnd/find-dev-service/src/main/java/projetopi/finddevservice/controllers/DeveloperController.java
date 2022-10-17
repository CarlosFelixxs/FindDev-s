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
public class DeveloperController {

    @Autowired
    private DesenvolvedorRepository devRepository;

    @PostMapping
    public ResponseEntity<Desenvolvedor> save(@RequestBody @Valid Desenvolvedor dev) {
        devRepository.save(dev);

        return ResponseEntity.status(201).body(dev);
    }

    @GetMapping
    public ResponseEntity<List<Desenvolvedor>> getAll() {
        List<Desenvolvedor> desenvolvedor = devRepository.findAll();

        return desenvolvedor.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(desenvolvedor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable(value = "id") UUID id){
        Optional<Desenvolvedor> desenvolvedor = devRepository.findById(id);

        return desenvolvedor.<ResponseEntity<Object>>map(
            value -> ResponseEntity.status(HttpStatus.OK).body(value)
        ).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Developer not found."));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable(value = "id")UUID id){
        Optional<Desenvolvedor> desenvolvedor = devRepository.findById(id);

        if (desenvolvedor.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Developer not found.");
        }

        devRepository.deleteByIdUsuario(id);

        return ResponseEntity.status(HttpStatus.OK).body("Developer deleted successfully.");
    }
}
