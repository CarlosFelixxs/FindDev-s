package projetopi.finddevservice.mapper.custom;


import org.springframework.stereotype.Service;
import projetopi.finddevservice.dtos.v1.CompanyDto;
import projetopi.finddevservice.dtos.v1.DevelopDto;
import projetopi.finddevservice.models.DesenvolvedorModel;
import projetopi.finddevservice.models.EmpresaModel;

import java.util.Date;

@Service
public class CompanyMapper {

    public CompanyDto convertEntityToDto(EmpresaModel person){

        CompanyDto dto = new CompanyDto();
        dto.setKey(person.getIdUsuario());
        dto.setNome(person.getNome());
        dto.setEmail(person.getEmail());
        dto.setSenha(person.recuperaSenha());
        dto.setEstado(person.getEstado());
        dto.setCidade(person.getCidade());
        dto.setTelefone(person.getTelefone());
        dto.setDataNascimento(person.getDataNascimento());
        dto.setBairro(person.getBairro());
        dto.setEndereco(person.getEndereco());
        dto.setComplemento(person.getComplemento());
        dto.setCnpj(person.getCnpj());
        return dto;


    }
    public EmpresaModel convertDtoToEntity(CompanyDto person){

        EmpresaModel entity = new EmpresaModel();
        entity.setIdUsuario(person.getKey());
        entity.setNome(person.getNome());
        entity.setEmail(person.getEmail());
        entity.setSenha(person.recuperaSenha());
        entity.setEstado(person.getEstado());
        entity.setCidade(person.getCidade());
        entity.setTelefone(person.getTelefone());
        entity.setDataNascimento(person.getDataNascimento());
        entity.setBairro(person.getBairro());
        entity.setEndereco(person.getEndereco());
        entity.setComplemento(person.getComplemento());
        entity.setCnpj(person.getCnpj());
        return entity;


    }

}
