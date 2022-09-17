package projetopi.finddevservice.models;

import projetopi.finddevservice.enums.TiposVagas;

import java.util.ArrayList;
import java.util.List;

public class UsuarioEmpresa extends Usuario {

    private List<Vaga> vagasEmpresa;
    private List<UsuarioDesenvolvedor> usuariosContratados;

    public UsuarioEmpresa() {
        this.vagasEmpresa = new ArrayList<>();
        this.usuariosContratados = new ArrayList<>();
    }

    public void adicionarVaga(Vaga vaga) {
        vagasEmpresa.add(vaga);
    }

    public void contratar(UsuarioDesenvolvedor dev) {
        usuariosContratados.add(dev);
    }

    // retorna o total de vagas que e a empresa tem

    public int getTotalVagas() {
        return vagasEmpresa.size();
    }

    // retorna a qtd de vagas da area especifica

    public int getQtdVagasArea(TiposVagas tipoDaVaga) {

        int qtdVagas = 0;

        for (Vaga v : vagasEmpresa) {
            if (v.getTipoDaVaga().equals(tipoDaVaga)) {
                qtdVagas++;
            }
        }
        return qtdVagas;
    }

    @Override
    public void avaliar(Usuario usuario, Integer nota) {

    }
}
