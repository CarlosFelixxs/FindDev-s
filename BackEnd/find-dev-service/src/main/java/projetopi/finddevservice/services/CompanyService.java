package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.controllers.DevelopController;
import projetopi.finddevservice.controllers.EmpresaController;
import projetopi.finddevservice.dtos.v1.CompanyDto;
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

    public List<CompanyDto> findAll(){

        logger.info("Finding all Companys!");

         var person =DozerMapper.parseListObjects(repository.findAll(),CompanyDto.class);
        person
                .stream()
                .forEach(p -> {
                    try {
                        p.add(linkTo(methodOn(EmpresaController.class).findById(p.getKey())).withSelfRel());
                    }catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                });

        return person;
    }

    public CompanyDto findById(UUID id){

        logger.info("Finding a Company!");
        var entity = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No records found for this id!"));
        var dto = DozerMapper.parseObject(entity, CompanyDto.class);
            dto.add(linkTo(methodOn(DevelopController.class).findById(id)).withSelfRel());
        return dto;
    }

    public CompanyDto create(CompanyDto person) throws Exception {

        logger.info("Checking existence!");
        existByEmailorCpf(person);

        logger.info("Create a Company!");
        var entity = DozerMapper.parseObject(person, EmpresaModel.class);
        var dto= DozerMapper.parseObject(repository.save(entity),CompanyDto.class);
            dto.add(linkTo(methodOn(EmpresaController.class).findById(dto.getKey())).withSelfRel());
        return dto;

    }

    private void existByEmailorCpf(CompanyDto person) {
        
        if (repository.existsByCnpjIgnoreCase(person.getCnpj())){
            throw new RequiredExistingObjectException("Cnpj already exists ");
        }
        if (repository.existsByEmailIgnoreCase(person.getEmail())){
            throw new RequiredExistingObjectException("Email already exists ");
        }
    }

    public  CompanyDto update(CompanyDto person) {

        if (person == null) throw new RequiredObjectIsNullException();

        logger.info("Checking existence!");
        existByEmailorCpf(person);

        logger.info("updating a Company!");
        var entity = repository.findById(person.getKey()).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));


        entity.setNome(person.getNome());
        entity.setEmail(person.getEmail());
        entity.setEstado(person.getEstado());
        entity.setCidade(person.getCidade());
        entity.setTelefone(person.getTelefone());
        entity.setDataNascimento(person.getDataNascimento());
        entity.setBairro(person.getBairro());
        entity.setEndereco(person.getEndereco());
        entity.setComplemento(person.getComplemento());
        entity.setCnpj(person.getCnpj());
        var dto = DozerMapper.parseObject(repository.save(entity), CompanyDto.class);
            dto.add(linkTo(methodOn(EmpresaController.class).findById(dto.getKey())).withSelfRel());
        return dto;


    }

    public  void delete(UUID id){

        logger.info("Deleting one Company!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        repository.delete(entity);
    }


}
