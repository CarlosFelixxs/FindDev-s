package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import projetopi.finddevservice.models.Usuario;

import java.util.List;
import java.util.UUID;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {

    Usuario findByNomeIgnoreCaseAndSenhaIgnoreCase(String nome, String senha);
    Usuario findByNomeIgnoreCase(String nome);

}
