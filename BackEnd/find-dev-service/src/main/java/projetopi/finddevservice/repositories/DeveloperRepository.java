package projetopi.finddevservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projetopi.finddevservice.models.Developer;

import java.util.UUID;

@Repository

public interface DeveloperRepository extends CrudRepository<Developer, UUID> {
    
}
