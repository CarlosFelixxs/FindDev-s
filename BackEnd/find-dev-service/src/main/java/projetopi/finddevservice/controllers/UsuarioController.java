package projetopi.finddevservice.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.models.Usuario;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {


    private List<Usuario> usuarios = new ArrayList<>();

    @PostMapping("/cadastrar")
    public ResponseEntity postUsuario(@RequestBody Usuario novoUsuario) {
            usuarios.add(novoUsuario);
            return ResponseEntity.status(201).body(novoUsuario);

        return ResponseEntity.status(400)
                .body("usuario e senha devem ter 3+ letras");
    }



}
