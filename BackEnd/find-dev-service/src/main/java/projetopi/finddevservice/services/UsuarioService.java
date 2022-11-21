package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.dtos.v1.LoginDto;
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
        var nome = repository.existsByNomeIgnoreCase(loginDto.getNome());
        var email = repository.existsByEmailIgnoreCase(loginDto.getEmail());

        if (!nome && !email) {
            throw new RequiredExistingObjectException("Username Not Found! ");
        }
        var user = repository.findByNomeIgnoreCaseOrEmailIgnoreCase(loginDto.getNome(), loginDto.getEmail());
        if (!loginDto.getSenha().equals(user.getSenha())) {
            throw new RequiredExistingObjectException("Invalid Password!");
        }

        return user;
    }


}
