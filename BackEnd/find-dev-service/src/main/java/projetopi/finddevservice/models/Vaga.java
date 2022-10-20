package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.FuncaoDesenvolvedor;
import projetopi.finddevservice.enums.SenioridadeDesenvolvedor;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Vaga {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(length = 45)
    private String titulo;

    @Column(length = 200)
    private String descricao;

    private FuncaoDesenvolvedor funcao;

    private SenioridadeDesenvolvedor senioridade;

    public Vaga(
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

    public Vaga() {

    }
}
