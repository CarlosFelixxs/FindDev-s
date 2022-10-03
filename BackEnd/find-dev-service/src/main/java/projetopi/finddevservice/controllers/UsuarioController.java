package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.models.Usuario;
import projetopi.finddevservice.repositories.UsuaioRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuaioRepository repository;

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuario> post(@RequestBody Usuario newCarro) {
        repository.save(newCarro);
        return ResponseEntity.status(201).body(newCarro);
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> get() {
        List<Usuario> lista = repository.findAll();
        return lista.isEmpty()
                ? ResponseEntity.status(204).build()
                : ResponseEntity.status(200).body(lista);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> get(@PathVariable long id){
        return ResponseEntity.of(repository.findById(id));
    }


}
