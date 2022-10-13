package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.FuncaoDesenvolvedor;
import projetopi.finddevservice.enums.SenioridadeDesenvolvedor;

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
    private FuncaoDesenvolvedor funcao;
    private SenioridadeDesenvolvedor senioridade;

    public Cargo(
        String titulo,
        String descricao,
        FuncaoDesenvolvedor funcao,
        SenioridadeDesenvolvedor senioridade
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.funcao = funcao;
        this.senioridade = senioridade;
    }

    public Cargo() {

    }
}
