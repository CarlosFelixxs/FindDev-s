package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import projetopi.finddevservice.models.DesenvolvedorModel;

import java.util.UUID;

@Repository
public interface DesenvolvedorRepository extends JpaRepository<DesenvolvedorModel, UUID> {

    @Transactional
    @Modifying
    void deleteById (UUID uuid);


}
