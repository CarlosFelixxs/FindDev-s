package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.models.Empresa;
import projetopi.finddevservice.repositories.EmpresaRepository;

import javax.validation.Valid;
import java.util.List;
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
    public ResponseEntity<Empresa> getById(@PathVariable(value = "id") UUID id){
        Empresa empresa = empresaRepository.findById(id).orElse(null);
        return empresa == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(empresa);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Empresa> deleteEmpresa(@PathVariable(value = "id") UUID id){
        Empresa empresa = empresaRepository.deleteByIdUsuario(id);

        return empresa == null ? ResponseEntity.notFound().build() : ResponseEntity.ok().body(empresa);
    }

    @PutMapping("/atualizacao/{id}")
    public ResponseEntity<Empresa> updateEmpresa(@PathVariable(value = "id") UUID id) {
        Empresa empresa = empresaRepository.findById(id).orElse(null);

        if (empresa == null) return ResponseEntity.notFound().build();

        empresaRepository.save(empresa);
        return ResponseEntity.ok().body(empresa);
    }
}
