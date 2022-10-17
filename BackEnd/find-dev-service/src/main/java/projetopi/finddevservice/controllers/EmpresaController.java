package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.models.Empresa;
import projetopi.finddevservice.repositories.EmpresaRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaRepository empresaRepository;

    @PostMapping
    public ResponseEntity<Empresa> save(@RequestBody @Valid Empresa empresa) {
        empresaRepository.save(empresa);
        return ResponseEntity.status(201).body(empresa);
    }

    @GetMapping
    public ResponseEntity<List<Empresa>> getAll() {
        List<Empresa> empresa = empresaRepository.findAll();
        return empresa.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(empresa);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable(value = "id") UUID id){
        Optional<Empresa> empresa = empresaRepository.findById(id);

        return empresa.<ResponseEntity<Object>>map(
            value -> ResponseEntity.status(HttpStatus.OK).body(value)
        ).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body("Develop not found."));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteDevelop(@PathVariable(value = "id")UUID id){
        Optional<Empresa> empresa = empresaRepository.findById(id);

        if (empresa.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Company not found.");
        }

        empresaRepository.deleteByIdUsuario(id);

        return ResponseEntity.status(HttpStatus.OK).body("Company deleted successfully.");
    }
}
