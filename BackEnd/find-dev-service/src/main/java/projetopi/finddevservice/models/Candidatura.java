package projetopi.finddevservice.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Candidatura {

    @OneToOne
    @Id
    private DesenvolvedorModel desenvolvedor;

    @OneToOne
    private EmpresaModel empresa;
}
