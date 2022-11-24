package projetopi.finddevservice.models;

import projetopi.finddevservice.enums.PlanoDev;

import javax.persistence.*;

@Entity
@Table(name ="Desenvolvedor")
@PrimaryKeyJoinColumn(name = "id")

public class DesenvolvedorModel extends UsuarioModel {

    @Enumerated(EnumType.STRING)
    @Column(name = "plano_assinatura")
    private PlanoDev plano;

    private String cpf;

    public DesenvolvedorModel() {
        plano = PlanoDev.GRATUITO;
    }

    public PlanoDev getPlano() {
        return plano;
    }

    public void setPlano(PlanoDev plano) {
        this.plano = plano;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}

