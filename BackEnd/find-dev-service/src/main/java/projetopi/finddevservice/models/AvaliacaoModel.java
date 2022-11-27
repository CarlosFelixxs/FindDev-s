package projetopi.finddevservice.models;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "avaliacao")
public class AvaliacaoModel implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAvaliacao;

    @ManyToOne
    private UsuarioModel avaliador;
    @ManyToOne
    private UsuarioModel avaliado;
    @Min(1)
    @Max(5)
    private Integer nota;

    @Column(length = 2600)
    private String comentario;

    private boolean isCompany;

    @CreationTimestamp
    private LocalDateTime dataHoraAvaliacao;

    public AvaliacaoModel() {
    }

    public Integer getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(Integer idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public UsuarioModel getAvaliador() {
        return avaliador;
    }

    public void setAvaliador(UsuarioModel avaliador) {
        this.avaliador = avaliador;
    }

    public UsuarioModel getCompany() {
        return avaliado;
    }

    public void setAvaliado(UsuarioModel avaliado) {
        this.avaliado = avaliado;
    }

    public Integer getNota() {
        return nota;
    }

    public void setNota(Integer nota) {
        this.nota = nota;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    public LocalDateTime getDataHoraAvaliacao() {
        return dataHoraAvaliacao;
    }

    public void setDataHoraAvaliacao(LocalDateTime dataHoraAvaliacao) {
        this.dataHoraAvaliacao = dataHoraAvaliacao;
    }

    public boolean getAvaliado() {
        return isCompany;
    }

    public void setCompany(boolean company) {
        isCompany = company;
    }
}
