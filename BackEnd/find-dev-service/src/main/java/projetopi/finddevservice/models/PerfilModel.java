package projetopi.finddevservice.models;

import lombok.*;
import projetopi.finddevservice.enums.StatusDesenvolvedor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Entity
@Table(name = "Perfil")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PerfilModel {

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

    @OneToOne
    @JoinColumn(name = "idUsuario")
    private UsuarioModel usuario;

}
