package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.models.Desenvolvedor;
import projetopi.finddevservice.repositories.DesenvolvedorRepository;

@Service
public class DesenvolvedorService {

    @Autowired
    private DesenvolvedorRepository devRepository;


    public Desenvolvedor post( Desenvolvedor dev) {
        devRepository.save(dev);
        return dev;
    }



}
