package projetopi.finddevservice.models;

import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name ="Empresa")
@PrimaryKeyJoinColumn(name = "idUser")
public class Company extends User {

    @Column(nullable = false, length = 255)
    private String bairro;

    @Column(nullable = false, length = 255)
    private String endereco;

    @Column(nullable = false, length = 30)
    private String complemento;

    @CNPJ
    private String cnpj;




}
