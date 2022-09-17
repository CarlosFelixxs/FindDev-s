package projetopi.finddevservice.models;

import projetopi.finddevservice.enums.Status;

public class UsuarioDesenvolvedor extends Usuario {

    private Status status;

    @Override
    public void avaliar(Usuario usuario, Integer nota) {
        usuario.getMapAvaliacoes().put(this, nota);
    }
}
