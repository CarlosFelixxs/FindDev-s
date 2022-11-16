package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.controllers.DevelopController;
import projetopi.finddevservice.dtos.v1.DevelopDto;
import projetopi.finddevservice.exceptions.RequiredObjectIsNullException;
import projetopi.finddevservice.exceptions.ResourceNotFoundException;
import projetopi.finddevservice.mapper.DozerMapper;
import projetopi.finddevservice.models.DesenvolvedorModel;
import projetopi.finddevservice.repositories.DesenvolvedorRepository;

import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@Service
public class DesenvolvedorService {

    @Autowired
    private DesenvolvedorRepository repository;

    private Logger logger = Logger.getLogger(DesenvolvedorService.class.getName());

    public List<DevelopDto> findAll(){

        logger.info("Finding all Devs!");

         var person = DozerMapper.parseListObjects(repository.findAll(),DevelopDto.class);
        person
            .stream()
            .forEach(p -> {
                try {
                    p.add(linkTo(methodOn(DevelopController.class).findById(p.getKey())).withSelfRel());
                }catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });

        return person;
    }

    public DevelopDto findById(UUID id){

        logger.info("Finding a Dev!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));
        var dto = DozerMapper.parseObject(entity,DevelopDto.class);
            dto.add(linkTo(methodOn(DevelopController.class).findById(id)).withSelfRel());
        return dto;

    }

    public DevelopDto create(DevelopDto person){

        if (person == null) throw new RequiredObjectIsNullException();

        logger.info("Create a Dev!");
        var entity = DozerMapper.parseObject(person, DesenvolvedorModel.class);
        repository.save(entity);
        var dto= DozerMapper.parseObject(entity,DevelopDto.class);
            dto.add(linkTo(methodOn(DevelopController.class).findById(dto.getKey())).withSelfRel());
        return dto;

    }

    public DevelopDto update(DevelopDto person) {

        if (person == null) throw new RequiredObjectIsNullException();
        logger.info("updating a Dev!");
        var entity = repository.findById(person.getKey()).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        entity.setNome(person.getNome());
        entity.setEmail(person.getEmail());
        entity.setEstado(person.getEstado());
        entity.setCidade(person.getCidade());
        entity.setTelefone(person.getTelefone());
        entity.setDataNascimento(person.getDataNascimento());
        entity.setCpf(person.getCpf());
        var dto = DozerMapper.parseObject(repository.save(entity), DevelopDto.class);
            dto.add(linkTo(methodOn(DevelopController.class).findById(dto.getKey())).withSelfRel());
        return dto;

    }

    public  void delete(UUID id){

        logger.info("Deleting one dev!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));
        repository.delete(entity);
    }


}
