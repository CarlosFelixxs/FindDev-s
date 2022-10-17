package projetopi.finddevservice.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Perfil")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Perfil {

    @Id
//    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPerfil;

    @Column(length = 50)
    private String titulo;

    @Column(length = 2600)
    private String descricao;

//    @Enumerated(EnumType.STRING)
//    @Column(name = "status", length = 25)
//    private StatusDesenvolvedor status;
//
//    @Column(name = "userAtivo", length = 25)
//    private boolean isAtivo = false;

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    public Perfil(String titulo, String descricao, Usuario usuario) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.usuario = usuario;
    }


}
