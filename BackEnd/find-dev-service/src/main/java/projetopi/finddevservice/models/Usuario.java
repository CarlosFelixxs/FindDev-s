package projetopi.finddevservice.models;

import org.hibernate.validator.constraints.Length;
import projetopi.finddevservice.enums.PlanoAssinatura;

import javax.validation.constraints.Email;
import java.util.Map;
//@Entity
public abstract class Usuario {

//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Length(min = 4)
    private String nome;
    @Email
    private String email;
    private String senha;
    private Map<Usuario, Integer> mapAvaliacoes;
    private PlanoAssinatura plano;

    public abstract void avaliar(Usuario usuario, Integer nota);

//    public boolean autenticar(String usuario, String senha) {
//        autenticado = usuario.equals(this.usuario) && senha.equals(this.senha);
//        return autenticado;
//    }

    public long getId() {
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
