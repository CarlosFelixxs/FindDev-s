package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.FuncaoDev;
import projetopi.finddevservice.enums.SenioridadeDev;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Vaga {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private UUID idEmpresa;

    @OneToOne
    @JoinColumn(name = "idDesenvolvedor")
    private DesenvolvedorModel desenvolvedorContratado;

    private String titulo;

    private String descricao;

    @Enumerated(EnumType.STRING)
    @Column(name = "funcao")
    private FuncaoDev funcao;

    @Enumerated(EnumType.STRING)
    @Column(name = "senioridade")
    private SenioridadeDev senioridade;

    private boolean encerrado;

    private boolean avaliado;

    public Vaga(
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

    public Vaga() {

    }
}