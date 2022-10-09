package projetopi.finddevservice.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import projetopi.finddevservice.models.Company;

import java.util.UUID;

@Repository
public interface CompanyRepository extends CrudRepository<Company, UUID> {
}
