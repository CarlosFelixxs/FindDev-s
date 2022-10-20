package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CPF;
import projetopi.finddevservice.enums.PlanoDesenvolvedor;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@PrimaryKeyJoinColumn(name = "idUsuario")
@Getter
@Setter
public class Desenvolvedor extends Usuario {

    @CPF
    @Size(max = 11)
    private String cpf;

    @Enumerated(EnumType.STRING)
    @Column(name = "plano")
    private PlanoDesenvolvedor plano = PlanoDesenvolvedor.GRATUITO;
}
