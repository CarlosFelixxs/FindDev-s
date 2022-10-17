package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.StatusDesenvolvedor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Perfil")
@Getter
@Setter
public class Perfil {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPerfil;

    @Column(length = 50, unique = true)
    private String titulo;

    @Column(length = 2600, unique = true)
    private String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 25)
    private StatusDesenvolvedor status;

    @Column(name = "userAtivo", length = 25)
    private boolean isAtivo = false;


}
