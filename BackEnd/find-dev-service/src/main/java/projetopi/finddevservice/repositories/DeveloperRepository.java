package projetopi.finddevservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository

public interface DeveloperRepository extends CrudRepository<DeveloperRepository, UUID> {
}
