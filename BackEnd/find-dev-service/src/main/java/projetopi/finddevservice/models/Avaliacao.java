package projetopi.finddevservice.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Avaliacao")
public class Avaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idAvaliacao;

    @NotNull
    private Integer nota;

    @Column(length = 2600)
    private String comentario ;

    @ManyToOne
    @JoinColumn(name="idUser")
    private User user;

}
