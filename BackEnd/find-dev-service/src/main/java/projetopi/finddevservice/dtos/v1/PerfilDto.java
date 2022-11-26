package projetopi.finddevservice.dtos.v1;

import org.springframework.hateoas.RepresentationModel;
import projetopi.finddevservice.enums.StatusDesenvolvedor;

import javax.validation.constraints.Size;
import java.io.Serializable;

public class PerfilDto extends RepresentationModel<PerfilDto> implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer idPerfil;
    @Size(max = 50)
    private String titulo;
    @Size(max = 2600)
    private String descricao;
    private StatusDesenvolvedor status = StatusDesenvolvedor.DISPONIVEL;


    public PerfilDto() {
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

    public String getDescricao() { return descricao;}

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
