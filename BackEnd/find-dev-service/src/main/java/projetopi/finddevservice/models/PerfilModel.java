package projetopi.finddevservice.models;

import lombok.*;
import projetopi.finddevservice.enums.StatusDesenvolvedor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Optional;

@Entity
@Table(name = "Perfil")
public class PerfilModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPerfil;
    @Size(max = 50)
    @Column(length = 50)
    private String titulo;
    @Size(max = 2600)
    @Column(length = 2600)
    private String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 25)
    private StatusDesenvolvedor status;


    public PerfilModel() {
    }


    public Integer getIdPerfil() {
        return idPerfil;
    }

    public void setIdPerfil(Integer idPerfil) {
        this.idPerfil = idPerfil;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public StatusDesenvolvedor getStatus() {
        return status;
    }

    public void setStatus(StatusDesenvolvedor status) {
        this.status = status;
    }
}
