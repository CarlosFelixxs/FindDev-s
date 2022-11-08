package projetopi.finddevservice.models;

import org.hibernate.validator.constraints.br.CPF;
import projetopi.finddevservice.enums.PlanoDesenvolvedor;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name ="Desenvolvedor")
@PrimaryKeyJoinColumn(name = "idUsuario")

public class DesenvolvedorModel extends UsuarioModel {

    @CPF
    @Size(max = 11)
    private String cpf;

    @Enumerated(EnumType.STRING)
    @Column(name = "plano")
    private PlanoDesenvolvedor plano = PlanoDesenvolvedor.GRATUITO;

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public PlanoDesenvolvedor getPlano() {
        return plano;
    }

    public void setPlano(PlanoDesenvolvedor plano) {
        this.plano = plano;
    }
}
