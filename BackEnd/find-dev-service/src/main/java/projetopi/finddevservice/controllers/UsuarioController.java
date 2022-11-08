package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetopi.finddevservice.repositories.PerfilRepository;
import projetopi.finddevservice.repositories.UsuarioRepository;

@RestController
@RequestMapping("/user")
public class UsuarioController {

    @Autowired
    private UsuarioRepository userRepository;

    @Autowired
    private PerfilRepository perfilRepository;

}
