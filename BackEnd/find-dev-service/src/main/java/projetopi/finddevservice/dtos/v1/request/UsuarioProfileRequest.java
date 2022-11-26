package projetopi.finddevservice.dtos.v1.request;

import java.util.UUID;

public class UsuarioProfileRequest {

    private UUID id;
    private String titulo;
    private String descricao;


    public UsuarioProfileRequest() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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

}
