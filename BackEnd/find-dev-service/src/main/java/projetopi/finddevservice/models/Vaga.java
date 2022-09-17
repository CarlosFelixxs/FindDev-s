package projetopi.finddevservice.models;

import org.w3c.dom.Text;
import projetopi.finddevservice.enums.TiposVagas;

public class Vaga {

    private String titulo;
    private Text descricao;
    private Integer qtdvagas;
    private TiposVagas tipoDaVaga;

    public Vaga(String titulo, Text descricao, Integer qtdvagas, TiposVagas tipoDaVaga) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.qtdvagas = qtdvagas;
        this.tipoDaVaga = tipoDaVaga;
    }


    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public Text getDescricao() {
        return descricao;
    }

    public void setDescricao(Text descricao) {
        this.descricao = descricao;
    }

    public Integer getQtdvagas() {
        return qtdvagas;
    }

    public void setQtdvagas(Integer qtdvagas) {
        this.qtdvagas = qtdvagas;
    }

    public TiposVagas getTipoDaVaga() {
        return tipoDaVaga;
    }

    public void setTipoDaVaga(TiposVagas tipoDaVaga) {
        this.tipoDaVaga = tipoDaVaga;
    }
}
