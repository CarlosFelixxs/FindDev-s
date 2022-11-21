package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetopi.finddevservice.dtos.v1.LoginDto;
import projetopi.finddevservice.exceptions.RequiredObjectIsNullException;
import projetopi.finddevservice.models.UsuarioModel;
import projetopi.finddevservice.services.UsuarioService;

@RestController
@RequestMapping("/api/v1/user")
public class UsuarioController {

    @Autowired
    private UsuarioService service;


    @GetMapping(value = "/login")
    public ResponseEntity<UsuarioModel> login(@RequestBody LoginDto loginDto){

        if(loginDto == null) throw new RequiredObjectIsNullException();
        return ResponseEntity.ok(service.login(loginDto));
    }

}
