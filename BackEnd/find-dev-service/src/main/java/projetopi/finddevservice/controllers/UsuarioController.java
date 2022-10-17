package projetopi.finddevservice.controllers;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.dtos.PostPerfilDtos;
import projetopi.finddevservice.models.Perfil;
import projetopi.finddevservice.models.Usuario;
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

//    @PostMapping("/login/{nome}/{senha}")
//    public Object logonUsuario(@PathVariable String nome,
//                                @PathVariable String senha) {
//        List<Usuario> users = userRepository.findByNomeIgnoreCaseAndSenhaIgnoreCase(nome,senha);
//            for (int i = 0; i < users.size()- 1; i++) {
//                users.get(i).getPerfil().setAtivo(true);
//            }
//        return users.isEmpty()
//                ? ResponseEntity.status(204).body("User not found!")
//                : ResponseEntity.status(200).body("user logged in successfully!");
//    }
//
//    @DeleteMapping("/logoff/{nome}")
//    public Object logoffUsuario(@PathVariable String nome) {
//        List<Usuario> users = userRepository.findByNomeIgnoreCase(nome);
//        for (int i = 0; i < users.size()- 1; i++) {
//            users.get(i).getPerfil().setAtivo(false);
//        }
//        return users.isEmpty()
//                ? ResponseEntity.status(204).body("User not found!")
//                : ResponseEntity.status(200).body("user logged out in successfully!");
//    }



}
