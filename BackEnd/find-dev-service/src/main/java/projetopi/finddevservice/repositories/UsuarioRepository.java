package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projetopi.finddevservice.models.UsuarioModel;

import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, UUID> {
    Boolean existsByEmailIgnoreCase(String email);
    Boolean existsByNomeIgnoreCase(String nome);

    UsuarioModel findByNomeIgnoreCaseOrEmailIgnoreCase(String nome,String email);

}
