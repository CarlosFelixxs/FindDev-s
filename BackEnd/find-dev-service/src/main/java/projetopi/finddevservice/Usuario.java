package projetopi.finddevservice;

import java.util.Map;

public abstract class Usuario {

    private int id;
    private String nome;
    private String email;
    private String senha;
    private Map<Usuario, Integer> mapAvaliacoes;
    private PlanoAssinatura plano;

    public abstract void avaliar(Usuario usuario, Integer nota);

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public Map<Usuario, Integer> getMapAvaliacoes() {
        return mapAvaliacoes;
    }

    public double getMediaAvaliacoes() {
        return (double) mapAvaliacoes.values().stream().reduce(0, Integer::sum) / mapAvaliacoes.size();
    }

    public PlanoAssinatura getPlano() {
        return plano;
    }
}
