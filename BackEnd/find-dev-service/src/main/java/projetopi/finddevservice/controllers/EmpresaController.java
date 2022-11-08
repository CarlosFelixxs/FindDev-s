package projetopi.finddevservice.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.models.EmpresaModel;
import projetopi.finddevservice.repositories.EmpresaRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/empresa")
@Tag(name = "Company",description = "Endpoints for Managing Companys")
public class EmpresaController {

    @Autowired
    private EmpresaRepository companyRepository;

    @PostMapping
    public ResponseEntity<EmpresaModel> post(@RequestBody @Valid EmpresaModel empresa) {
        companyRepository.save(empresa);
        return ResponseEntity.status(201).body(empresa);
    }

    @GetMapping
    public ResponseEntity<List<EmpresaModel>> getAllDevs() {
        List<EmpresaModel> empresa = companyRepository.findAll();
        return empresa.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(empresa);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getId(@PathVariable(value = "id") UUID id){
        Optional<EmpresaModel> empresa = companyRepository.findById(id);
        if (!empresa.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Develop not found.");
        }
        return ResponseEntity.status(HttpStatus.OK).body(empresa.get());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteDevelop(@PathVariable(value = "id")UUID id){
        Optional<EmpresaModel> empresa = companyRepository.findById(id);
        if (!empresa.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Company not found.");
        }
        companyRepository.deleteByIdUsuario(id);
        return ResponseEntity.status(HttpStatus.OK).body("Company deleted successfully.");

    }




}
