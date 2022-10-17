package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import projetopi.finddevservice.models.Empresa;

import java.util.UUID;

@Repository
public interface EmpresaRepository extends JpaRepository <Empresa, UUID> {

    @Transactional
    @Modifying
    void deleteByIdUsuario (UUID uuid);
}
