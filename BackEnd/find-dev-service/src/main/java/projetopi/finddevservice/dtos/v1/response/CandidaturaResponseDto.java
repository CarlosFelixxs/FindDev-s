package projetopi.finddevservice.dtos.v1.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.dozermapper.core.Mapping;
import org.springframework.hateoas.RepresentationModel;
import projetopi.finddevservice.models.DesenvolvedorModel;
import projetopi.finddevservice.models.Vaga;

import java.io.Serializable;

public class CandidaturaResponseDto extends RepresentationModel<CandidaturaResponseDto> implements Serializable {

    @Mapping("id")
    @JsonProperty("id")
    private int key;

    private DesenvolvedorModel desenvolvedor;

    private Vaga vaga;

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }

    public DesenvolvedorModel getDesenvolvedor() {
        return desenvolvedor;
    }

    public void setDesenvolvedor(DesenvolvedorModel desenvolvedor) {
        this.desenvolvedor = desenvolvedor;
    }

    public Vaga getIdVaga() {
        return vaga;
    }

    public void setVaga(Vaga vaga) {
        this.vaga = vaga;
    }
}
