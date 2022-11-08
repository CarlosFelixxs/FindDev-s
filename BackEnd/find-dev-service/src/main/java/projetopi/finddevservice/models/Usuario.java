package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Usuario implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    private UUID idUsuario;

    @Size(min = 3, max = 255)
    @Column(nullable = false)
    @Getter @Setter
    private String nome;

    @Email
    @Getter @Setter
    private String email;

    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
        message = "Informe uma senha de no mínimo 8 dígitos," +
                " com pelo menos um caractere especial, um número e uma letra maiuscula"
    )
    private String senha;

    @Column(nullable = false, length = 30)
    @Getter @Setter
    private String estado;

    @Column(nullable = false, length = 30)
    @Getter @Setter
    private String cidade;

    @Pattern(
        regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})",
        // https://medium.com/@igorrozani/criando-uma-express%C3%A3o-regular-para-telefone-fef7a8f98828
        message = "Informe um telefone válido com ou sem DDD"
    )
    @Getter @Setter
    private String telefone;

    @PastOrPresent
    @NotNull
    @Column(nullable = false)
    @Getter @Setter
    private LocalDate dataNascimento;

    public String senhaGetter() {
        return senha;
    }

    public void senhaSetter(String senha) {
        this.senha = senha;
    }
}
