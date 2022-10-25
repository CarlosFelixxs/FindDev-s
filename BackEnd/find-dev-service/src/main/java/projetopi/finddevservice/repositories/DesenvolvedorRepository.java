package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import projetopi.finddevservice.enums.PlanoDesenvolvedor;
import projetopi.finddevservice.models.Desenvolvedor;

import java.util.UUID;

@Repository

public interface DesenvolvedorRepository extends JpaRepository<Desenvolvedor, UUID> {

    @Transactional
    @Modifying
    Desenvolvedor deleteByIdUsuario(UUID uuid);
}
