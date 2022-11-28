package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import projetopi.finddevservice.models.Vaga;

import java.util.List;
import java.util.UUID;

public interface VagasRepository extends JpaRepository<Vaga, Integer> {


    List<Vaga> findByIdEmpresa(UUID id);

    List<Vaga> findByIdDesenvolvedor(UUID id);

    List<Vaga> findByFuncaoAndSenioridade(String funcao, String senioridade);
}

