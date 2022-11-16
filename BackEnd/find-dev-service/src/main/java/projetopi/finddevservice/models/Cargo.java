package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.FuncaoDev;
import projetopi.finddevservice.enums.SenioridadeDev;

import javax.persistence.*;

@Entity
@Table(name = "ROLE")
@Getter
@Setter
public class Cargo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String titulo;
    private String descricao;
    private FuncaoDev funcao;
    private SenioridadeDev senioridade;

    public Cargo(
            String titulo,
            String descricao,
            FuncaoDev funcao,
            SenioridadeDev senioridade
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.funcao = funcao;
        this.senioridade = senioridade;
    }

    public Cargo() {

    }
}