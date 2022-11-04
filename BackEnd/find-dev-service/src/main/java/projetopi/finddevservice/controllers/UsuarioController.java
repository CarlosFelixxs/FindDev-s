package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetopi.finddevservice.repositories.UsuarioRepository;

@RestController
@RequestMapping("/api/v1/user")
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
