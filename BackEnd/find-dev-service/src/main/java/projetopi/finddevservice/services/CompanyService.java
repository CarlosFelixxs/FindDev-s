package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.controllers.DevelopController;
import projetopi.finddevservice.controllers.EmpresaController;
import projetopi.finddevservice.dtos.v1.request.CompanyRequestDto;
import projetopi.finddevservice.dtos.v1.response.CompanyResponseDto;
import projetopi.finddevservice.exceptions.RequiredExistingObjectException;
import projetopi.finddevservice.exceptions.RequiredObjectIsNullException;
import projetopi.finddevservice.exceptions.ResourceNotFoundException;
import projetopi.finddevservice.mapper.DozerMapper;
import projetopi.finddevservice.models.EmpresaModel;
import projetopi.finddevservice.repositories.EmpresaRepository;

import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class CompanyService {

    @Autowired
    private EmpresaRepository repository;

    private final Logger logger = Logger.getLogger(CompanyService.class.getName());

    public List<CompanyResponseDto> findAll() {

        logger.info("Finding all Companys!");

        var person = DozerMapper.parseListObjects(repository.findAll(), CompanyResponseDto.class);
        person
                .stream()
                .forEach(p -> {
                    try {
                        p.add(linkTo(methodOn(EmpresaController.class).findById(p.getKey())).withSelfRel());
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                });

        return person;
    }


    public CompanyResponseDto findById(UUID id) {

        logger.info("Finding a Company!");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No records found for this id!"));
        var dto = DozerMapper.parseObject(entity, CompanyResponseDto.class);
        dto.add(linkTo(methodOn(DevelopController.class).findById(id)).withSelfRel());
        return dto;
    }

    public CompanyResponseDto create(CompanyRequestDto person) throws Exception {

        logger.info("Checking existence!");
        if(existByEmail(person.getEmail())) throw new RequiredExistingObjectException("Email already in use!");
        if(existByCnpj(person.getCnpj())) throw new RequiredExistingObjectException("Cnpj already in use!");

        logger.info("Create a Company!");
        var entity = DozerMapper.parseObject(person, EmpresaModel.class);
        var dto = DozerMapper.parseObject(repository.save(entity), CompanyResponseDto.class);
        dto.add(linkTo(methodOn(EmpresaController.class).findById(dto.getKey())).withSelfRel());
        return dto;

    }

    public Boolean existByCnpj(String cnpj) {

        if (repository.existsByCnpjIgnoreCase(cnpj)) {
            return true;
        }
        return false;
    }

    public Boolean existByEmail(String email) {

        if (repository.existsByEmailIgnoreCase(email)) {
            return true;
        }

        return false;
    }

    public CompanyResponseDto update(CompanyRequestDto person) {

        if (person == null) throw new RequiredObjectIsNullException();

        logger.info("updating a Company!");
        var entity = repository.findById(person.getKey()).orElseThrow(
            () -> new ResourceNotFoundException("No records found for this id!")
        );

        if (!entity.getEmail().equalsIgnoreCase(person.getEmail())) {
            if(existByEmail(person.getEmail())) throw new RequiredExistingObjectException("Email already in use!");
            entity.setEmail(person.getEmail().isEmpty() ? entity.getEmail() : person.getEmail());
        }

        if (!entity.getCnpj().equalsIgnoreCase(person.getCnpj())) {
            if(existByCnpj(person.getCnpj())) throw new RequiredExistingObjectException("Cnpj already in use!");
            entity.setCnpj(person.getCnpj().isEmpty() ? entity.getCnpj() : person.getCnpj());
        }

        entity.setNome(person.getNome().isEmpty() ? entity.getNome() : person.getNome());
        entity.setEstado(person.getEstado().isEmpty() ? entity.getEstado() : person.getEstado());
        entity.setCidade(person.getCidade().isEmpty() ? entity.getCidade() : person.getCidade());
        entity.setTelefone(person.getTelefone().isEmpty() ? entity.getTelefone() : person.getTelefone());
        entity.setBairro(person.getBairro().isEmpty() ? entity.getBairro() : person.getBairro());
        entity.setEndereco(person.getEndereco().isEmpty() ? entity.getEndereco() : person.getEndereco());
        entity.setComplemento(person.getComplemento().isEmpty() ? entity.getComplemento() : person.getComplemento());

        var dto = DozerMapper.parseObject(repository.save(entity), CompanyResponseDto.class);
        dto.add(linkTo(methodOn(EmpresaController.class).findById(dto.getKey())).withSelfRel());
        return dto;
    }

    public void delete(UUID id) {

        logger.info("Deleting one Company!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        repository.delete(entity);
    }


}
