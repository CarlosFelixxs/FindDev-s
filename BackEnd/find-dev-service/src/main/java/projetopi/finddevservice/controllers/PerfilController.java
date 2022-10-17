//package projetopi.finddevservice.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import projetopi.finddevservice.dtos.UsuarioPerfilDtos;
//import projetopi.finddevservice.dtos.UsuarioPerfilResponse;
//import projetopi.finddevservice.models.Perfil;
//import projetopi.finddevservice.repositories.PerfilRepository;
//import projetopi.finddevservice.repositories.UsuarioRepository;
//
//import javax.validation.Valid;
//
//@RestController
//@RequestMapping("/perfil")
//public class PerfilController {
//
//    @Autowired
//    PerfilRepository perfilRepository;
//
//    @Autowired
//    UsuarioRepository usuarioRepository;
//
//
//    @PostMapping
//    public UsuarioPerfilResponse post(@RequestBody @Valid UsuarioPerfilDtos perfil) {
//
//      var user = usuarioRepository.findById(perfil.getIdUsuario());
//        var userperfil = perfilRepository.save(Perfil.of(perfil, user));
//        return UsuarioPerfilResponse.of(userperfil);
//    }
//
//
//}
