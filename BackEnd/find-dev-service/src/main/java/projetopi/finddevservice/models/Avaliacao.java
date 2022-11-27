package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
public class Avaliacao implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idAvaliacao;

    @ManyToOne
    private DesenvolvedorModel dev;

    @ManyToOne
    private EmpresaModel company;

    private Integer nota;

    @Column(length = 2600)
    private String comentario;

    @CreationTimestamp
    private LocalDateTime dataHoraAvaliacao;

    public Avaliacao() {
    }

    public Integer getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(Integer idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public DesenvolvedorModel getDev() {
        return dev;
    }

    public void setDev(DesenvolvedorModel dev) {
        this.dev = dev;
    }

    public EmpresaModel getCompany() {
        return company;
    }

    public void setCompany(EmpresaModel company) {
        this.company = company;
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
}
