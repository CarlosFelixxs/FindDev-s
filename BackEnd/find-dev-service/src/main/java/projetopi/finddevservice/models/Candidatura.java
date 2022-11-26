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
}
