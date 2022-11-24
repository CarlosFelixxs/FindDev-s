package projetopi.finddevservice.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name ="Empresa")
@PrimaryKeyJoinColumn(name = "id")

public class EmpresaModel extends UsuarioModel {

    @Column(nullable = false)
    private String bairro;

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = false, length = 30)
    private String complemento;

    private String cnpj;

    public EmpresaModel() {

    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
}
