package projetopi.finddevservice.mapper.custom;


import org.springframework.stereotype.Service;
import projetopi.finddevservice.dtos.v1.DevelopDto;
import projetopi.finddevservice.models.DesenvolvedorModel;

@Service
public class DevMapper {

    public DevelopDto convertEntityToDto(DesenvolvedorModel person){

        DevelopDto dto = new DevelopDto();
        dto.setIdUsuario(person.getIdUsuario());
        dto.setNome(person.getNome());
        dto.setEmail(person.getEmail());
        dto.setSenha(person.recuperaSenha());
        dto.setEstado(person.getEstado());
        dto.setCidade(person.getCidade());
        dto.setTelefone(person.getTelefone());
        dto.setDataNascimento(person.getDataNascimento());
        dto.setCpf(person.getCpf());
        return dto;


    }
    public DesenvolvedorModel convertDtoToEntity(DevelopDto person){

        DesenvolvedorModel entity = new DesenvolvedorModel();
        entity.setIdUsuario(person.getIdUsuario());
        entity.setNome(person.getNome());
        entity.setEmail(person.getEmail());
        entity.setSenha(person.getSenha());
        entity.setEstado(person.getEstado());
        entity.setCidade(person.getCidade());
        entity.setTelefone(person.getTelefone());
        entity.setDataNascimento(person.getDataNascimento());
        entity.setCpf(person.getCpf());
        return entity;


    }

}
