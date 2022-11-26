package projetopi.finddevservice.dtos.v1.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.github.dozermapper.core.Mapping;
import org.springframework.hateoas.RepresentationModel;
import projetopi.finddevservice.dtos.v1.PerfilDto;
import projetopi.finddevservice.enums.PlanoDev;
import projetopi.finddevservice.models.PerfilModel;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@JsonPropertyOrder(
        {"id", "nome", "email", "senha", "cpf", "estado", "cidade", "telefone", "dataNascimento","plano"}
)
public class DevelopRequestDto extends RepresentationModel<DevelopRequestDto> implements Serializable {

    private static final long serialVersionUID = 1L;
    @Mapping("id")
    @JsonProperty("id")
    private UUID key;
    @Size(min = 3, max = 255)
    @NotBlank
    private String nome;
    @Email
    @NotBlank
    private String email;
    @Pattern(
            regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
            message = "Informe uma senha com pelo menos um caractere especial, um número e uma letra maiuscula!"
    )
    @NotBlank
    private String senha;
    private String estado;
    private String cidade;
    @Pattern(
            regexp = "(\\(?\\d{2}\\)?\\s)?(\\d{4,5}\\-\\d{4})",
            // https://medium.com/@igorrozani/criando-uma-express%C3%A3o-regular-para-telefone-fef7a8f98828
            message = "Informe um telefone válido com ou sem DDD"
    )
    @NotBlank
    private String telefone;
    @Past
    @NotNull
    private LocalDate dataNascimento;
    @Size(min = 11, max = 11)
    @NotBlank
    private String cpf;

    public DevelopRequestDto() {

    }

    public UUID getKey() {
        return key;
    }

    public void setKey(UUID key) {
        this.key = key;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

}
