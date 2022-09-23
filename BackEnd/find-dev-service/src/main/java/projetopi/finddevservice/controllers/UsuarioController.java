package projetopi.finddevservice.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetopi.finddevservice.models.Usuario;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {


//    @PostMapping("/autenticacao/{usuario}/{senha}")
//    public ResponseEntity<Usuario> logonUsuario(@PathVariable String usuario,
//                                                @PathVariable String senha) {
//        for (Usuario usuarioAtual : usuarios) {
//            if (usuarioAtual.autenticar(usuario, senha)) {
//                return ResponseEntity.status(200).body(usuarioAtual);
//            }
//        }
//        return ResponseEntity.status(401).build();
    }



}
