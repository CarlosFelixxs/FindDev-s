package projetopi.finddevservice.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
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
@RequestMapping("/api/v1/dev")
@Tag(name = "Developer",description = "Endpoints for Managing devs")
public class DevelopController {

    @Autowired
    private DesenvolvedorRepository devRepository;

    @PostMapping
    public ResponseEntity<Desenvolvedor> post(@RequestBody @Valid Desenvolvedor dev) {
        devRepository.save(dev);
        return ResponseEntity.status(201).body(dev);
    }

    @GetMapping
    public ResponseEntity<List<Desenvolvedor>> getAllDevs() {
        List<Desenvolvedor> desenvolvedor = devRepository.findAll();
        return desenvolvedor.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(desenvolvedor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getId(@PathVariable(value = "id") UUID id){
        Optional<Desenvolvedor> desenvolvedor = devRepository.findById(id);
        if (!desenvolvedor.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Develop not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(desenvolvedor.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteDevelop(@PathVariable(value = "id")UUID id){
        Optional<Desenvolvedor> desenvolvedor = devRepository.findById(id);
        if (!desenvolvedor.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Develop not found.");
        }
        devRepository.deleteByIdUsuario(id);
        return ResponseEntity.status(HttpStatus.OK).body("Develop deleted successfully.");

    }




}
