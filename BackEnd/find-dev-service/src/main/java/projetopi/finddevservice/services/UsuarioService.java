package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.dtos.v1.request.LoginDto;
import projetopi.finddevservice.exceptions.RequiredExistingObjectException;
import projetopi.finddevservice.exceptions.RequiredObjectIsNullException;
import projetopi.finddevservice.models.UsuarioModel;
import projetopi.finddevservice.repositories.UsuarioRepository;

import java.util.logging.Logger;

@Service
public class UsuarioService {


    @Autowired
    private UsuarioRepository repository;

    private final Logger logger = Logger.getLogger(DesenvolvedorService.class.getName());


    public UsuarioModel login(LoginDto loginDto) {

        if (loginDto == null) {
            throw new RequiredObjectIsNullException();
        }

        logger.info("Finding a User!");

        var email =  verifyEmail(loginDto.getEmail());

        if (!email) {
            throw new RequiredExistingObjectException("Username Not Found! ");
        }
        var user = repository.findByEmailIgnoreCase(loginDto.getEmail());
        if (!loginDto.getSenha().equals(user.recuperaSenha())) {
            throw new RequiredExistingObjectException("Invalid Password!");
        }

        return user;
    }

    public Boolean verifyEmail(String email) {
        return repository.existsByEmailIgnoreCase(email);
    }



}
