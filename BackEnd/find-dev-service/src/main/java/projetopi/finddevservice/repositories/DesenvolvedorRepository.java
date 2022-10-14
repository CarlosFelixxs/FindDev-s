package projetopi.finddevservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projetopi.finddevservice.models.Desenvolvedor;

import java.util.UUID;

@Repository

public interface DesenvolvedorRepository extends CrudRepository<Desenvolvedor, UUID> {
    
}
