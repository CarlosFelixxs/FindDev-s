package projetopi.finddevservice.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Size;

@Getter
@Setter
public class PostPerfilDtos {

    @Size(min = 1,max = 50)
    private String titulo;

    @Size(min = 1,max = 2600)
    private String descricao;


}
