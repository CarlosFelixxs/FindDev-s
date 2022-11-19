package projetopi.finddevservice.models;

import org.hibernate.validator.constraints.br.CPF;
import projetopi.finddevservice.enums.PlanoDev;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name ="Desenvolvedor")
@PrimaryKeyJoinColumn(name = "id")

public class DesenvolvedorModel extends UsuarioModel {

    private String cpf;
    @Enumerated(EnumType.STRING)
    @Column(name = "plano")
    private PlanoDev plano = PlanoDev.GRATUITO;


    public DesenvolvedorModel() {
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public PlanoDev getPlano() {
        return plano;
    }

    public void setPlano(PlanoDev plano) {
        this.plano = plano;
    }



}

