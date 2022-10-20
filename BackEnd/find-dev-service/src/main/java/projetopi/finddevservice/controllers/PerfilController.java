package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.dtos.PostPerfilDtos;
import projetopi.finddevservice.models.Perfil;
import projetopi.finddevservice.models.Usuario;
import projetopi.finddevservice.repositories.PerfilRepository;
import projetopi.finddevservice.repositories.UsuarioRepository;

import javax.validation.Valid;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/perfil")
public class PerfilController {

    @Autowired
    PerfilRepository perfilRepository;

    @Autowired
    UsuarioRepository usuarioRepository;


    @PostMapping("/{id}")
    public ResponseEntity<Perfil> post(
        @PathVariable(value = "id") UUID idUser,
        @RequestBody @Valid PostPerfilDtos perfilDto
    ) {

        Usuario user = usuarioRepository.findById(idUser).orElse(null);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        Perfil perfil = new Perfil(perfilDto.getTitulo(), perfilDto.getDescricao(), user);

        perfilRepository.save(perfil);

        return ResponseEntity.ok().body(perfil);
    }
}
