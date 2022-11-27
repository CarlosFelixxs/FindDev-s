package projetopi.finddevservice.dtos.v1.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.dozermapper.core.Mapping;
import org.springframework.hateoas.RepresentationModel;
import projetopi.finddevservice.enums.FuncaoDev;
import projetopi.finddevservice.enums.SenioridadeDev;

import java.io.Serializable;

public class VagaResponseDto extends RepresentationModel<VagaResponseDto> implements Serializable {

    @Mapping("id")
    @JsonProperty("id")
    private int key;

    private EmpresaResponseDto empresaResponseDto;

    private DevelopResponseDto developResponseDto;

    private String titulo;

    private String descricao;

    private FuncaoDev funcao;

    private SenioridadeDev senioridade;

    private boolean encerrado;

    private boolean avaliado;

    public VagaResponseDto() {

    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public EmpresaResponseDto getCompanyResponseDto() {
        return empresaResponseDto;
    }

    public void setCompanyResponseDto(EmpresaResponseDto empresaResponseDto) {
        this.empresaResponseDto = empresaResponseDto;
    }

    public DevelopResponseDto getDevelopResponseDto() {
        return developResponseDto;
    }

    public void setDevelopResponseDto(DevelopResponseDto developResponseDto) {
        this.developResponseDto = developResponseDto;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public FuncaoDev getFuncao() {
        return funcao;
    }

    public void setFuncao(FuncaoDev funcao) {
        this.funcao = funcao;
    }

    public SenioridadeDev getSenioridade() {
        return senioridade;
    }

    public void setSenioridade(SenioridadeDev senioridade) {
        this.senioridade = senioridade;
    }

    public boolean isEncerrado() {
        return encerrado;
    }

    public void setEncerrado(boolean encerrado) {
        this.encerrado = encerrado;
    }

    public boolean isAvaliado() {
        return avaliado;
    }

    public void setAvaliado(boolean avaliado) {
        this.avaliado = avaliado;
    }
}
