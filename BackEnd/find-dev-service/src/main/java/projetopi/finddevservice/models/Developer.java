package projetopi.finddevservice.models;

import org.hibernate.validator.constraints.br.CPF;
import projetopi.finddevservice.enums.DeveloperStatus;
import projetopi.finddevservice.enums.SubscriptionPlan;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name ="Desenvolvedor")
@PrimaryKeyJoinColumn(name = "idUser")
public class Developer extends User {


    @CPF
    @Size(max = 11)
    private String cpf;
    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private DeveloperStatus status;

    @Enumerated(EnumType.STRING)
    @Column(name = "plano")
    private SubscriptionPlan plano;

    public DeveloperStatus getStatus() {
        return status;
    }

    public void setStatus(DeveloperStatus status) {
        this.status = status;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public SubscriptionPlan getPlano() {
        return plano;
    }

    public void setPlano(SubscriptionPlan plano) {
        this.plano = plano;
    }
}
