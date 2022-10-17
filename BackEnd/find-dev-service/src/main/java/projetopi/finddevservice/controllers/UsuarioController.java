package projetopi.finddevservice.controllers;

import org.springframework.beans.BeanUtils;
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
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/user")
public class UsuarioController {

    @Autowired
    private UsuarioRepository userRepository;

    @Autowired
    private PerfilRepository perfilRepository;

    @PostMapping("/login/{nome}/{senha}")
    public ResponseEntity<Usuario> logonUsuario(
        @PathVariable String nome,
        @PathVariable String senha
    ) {
        Optional<Usuario> user = userRepository.findByNomeIgnoreCaseAndSenhaIgnoreCase(nome,senha)
            .stream()
            .findFirst();

//        Optional<Perfil> perfil = perfilRepository.findById()

        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Usuario userEncontrado = user.get();

        if (userEncontrado.pegarAtivo()) {
            return ResponseEntity.status(403).build();
        }

        userEncontrado.setarAtivo(true);

        userRepository.save(userEncontrado);

        return ResponseEntity.ok().body(userEncontrado);
    }

    @DeleteMapping("/logoff/{nome}")
    public Object logoffUsuario(@PathVariable String nome) {
        Optional<Usuario> user = userRepository.findByNomeIgnoreCase(nome)
                .stream()
                .findFirst();

        if (user.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Usuario userEncontrado = user.get();

        if (userEncontrado.pegarAtivo()) {
            return ResponseEntity.status(403).build();
        }

        userEncontrado.setarAtivo(false);

        userRepository.save(userEncontrado);

        return ResponseEntity.ok().body(userEncontrado);
    }
}
