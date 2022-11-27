package projetopi.finddevservice.dtos.v1.response;

import org.hibernate.annotations.CreationTimestamp;
import projetopi.finddevservice.models.DesenvolvedorModel;
import projetopi.finddevservice.models.EmpresaModel;
import projetopi.finddevservice.models.UsuarioModel;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.time.LocalDateTime;
import java.util.UUID;

public class AvaliacaoResponseDto {

    private Integer idAvaliacao;
    private UUID avaliador;
    private UUID avaliado;
    private Integer nota;
    private String comentario;
    private boolean isCompany;
    private LocalDateTime dataHoraAvaliacao;

    public AvaliacaoResponseDto() {
    }

    public Integer getIdAvaliacao() {
        return idAvaliacao;
    }

    public void setIdAvaliacao(Integer idAvaliacao) {
        this.idAvaliacao = idAvaliacao;
    }

    public UUID getAvaliador() {
        return avaliador;
    }

    public void setAvaliador(UUID avaliador) {
        this.avaliador = avaliador;
    }

    public UUID getAvaliado() {
        return avaliado;
    }

    public void setAvaliado(UUID avaliado) {
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

    public void setCompany(boolean company) {
        isCompany = company;
    }
}
