package projetopi.finddevservice.dtos.v1.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.dozermapper.core.Mapping;
import org.springframework.hateoas.RepresentationModel;
import projetopi.finddevservice.dtos.v1.response.EmpresaResponseDto;
import projetopi.finddevservice.enums.FuncaoDev;
import projetopi.finddevservice.enums.SenioridadeDev;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

public class VagaRequestDto extends RepresentationModel<VagaRequestDto> implements Serializable {

    @Mapping("id")
    @JsonProperty("id")
    private int key;

    @NotNull
    private EmpresaResponseDto empresaResponseDto;

    @NotBlank
    private String titulo;

    @NotBlank
    private String descricao;

    @NotNull
    private FuncaoDev funcao;

    @NotNull
    private SenioridadeDev senioridade;

    public VagaRequestDto() {

    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public EmpresaResponseDto getEmpresaResponseDto() {
        return empresaResponseDto;
    }

    public void setEmpresaResponseDto(EmpresaResponseDto empresaResponseDto) {
        this.empresaResponseDto = empresaResponseDto;
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
}
