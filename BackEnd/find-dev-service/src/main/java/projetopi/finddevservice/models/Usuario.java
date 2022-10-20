package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "Usuario")
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
public abstract class Usuario implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID idUsuario;

    @Size(min = 3, max = 255)
    @Column(nullable = false)
    private String nome;

    @Email
    private String email;

    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        message = "Informe uma senha de no mínimo 8 dígitos," +
                " com pelo menos um caractere especial, um número e uma letra maiuscula"
    )
    private String senha;

    @Column(nullable = false, length = 30)
    private String estado;

    @Column(nullable = false, length = 30)
    private String cidade;

    @Pattern(
        regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})",
        // https://medium.com/@igorrozani/criando-uma-express%C3%A3o-regular-para-telefone-fef7a8f98828
        message = "Informe um telefone válido com ou sem DDD"
    )
    private String telefone;

    @PastOrPresent
    @NotNull
    @Column(nullable = false)
    private LocalDate dataNascimento;

    private final ListaObj<Avaliacao> avaliacoes = new ListaObj<>(5);

    public void addAvaliacao(Avaliacao a) {
        avaliacoes.adiciona(a);
    }

    public ListaObj<Avaliacao> ordenarAvaliacoes() {
        int indMenor;

        for (int i = 0; i < avaliacoes.getTamanho(); i++) {
            indMenor = i;
            for (int j = i + 1; j < avaliacoes.getTamanho(); j++) {
                if (avaliacoes.getElemento(j).getNota() < avaliacoes.getElemento(indMenor).getNota()) {
                    indMenor = j;
                }
            }
            Avaliacao maior = avaliacoes.getElemento(i);
            Avaliacao menor = avaliacoes.getElemento(indMenor);
            avaliacoes.set(i, menor);
            avaliacoes.set(indMenor, maior);
        }

        return avaliacoes;
    }

    public void exibeAvaliacoes() {
        for (int i = 0; i < avaliacoes.getTamanho(); i++) {
            System.out.println("Avaliacao \n\tNota: " + avaliacoes.getElemento(i).getNota());
        }
    }
}

