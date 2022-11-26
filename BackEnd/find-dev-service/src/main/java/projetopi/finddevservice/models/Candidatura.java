package projetopi.finddevservice.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Candidatura implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idCandidatura;

    @OneToOne
    private DesenvolvedorModel desenvolvedor;

    @OneToOne
    private EmpresaModel empresa;

    public int getIdCandidatura() {
        return idCandidatura;
    }

    public void setIdCandidatura(int idCandidatura) {
        this.idCandidatura = idCandidatura;
    }

    public DesenvolvedorModel getDesenvolvedor() {
        return desenvolvedor;
    }

    public void setDesenvolvedor(DesenvolvedorModel desenvolvedor) {
        this.desenvolvedor = desenvolvedor;
    }

    public EmpresaModel getEmpresa() {
        return empresa;
    }

    public void setEmpresa(EmpresaModel empresa) {
        this.empresa = empresa;
    }
}
