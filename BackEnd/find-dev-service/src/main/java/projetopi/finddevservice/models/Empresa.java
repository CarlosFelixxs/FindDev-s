package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name ="Empresa")
@PrimaryKeyJoinColumn(name = "idUsuario")
@Getter
@Setter
public class Empresa extends Usuario {

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false, length = 30)
    private String complemento;

    private String cnpj;
}
