package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.repositories.VagasRepository;

import java.util.logging.Logger;

@Service
public class VagasService {

    @Autowired
    private VagasRepository repository;

    private final Logger logger = Logger.getLogger(VagasService.class.getName());


}
