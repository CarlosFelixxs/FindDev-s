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

        return
        DozerMapper.parseListObjects(repository.findAll(),DevelopDto.class);
    }

    public DevelopDto findById(UUID id){

        logger.info("Finding a Dev!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        return DozerMapper.parseObject(entity,DevelopDto.class);

    }

    public DevelopDto create(DevelopDto person){

        if (person == null) throw new RequiredObjectIsNullException();

        logger.info("Create a Dev!");
        var entity = DozerMapper.parseObject(person, DesenvolvedorModel.class);
        var dto= DozerMapper.parseObject(repository.save(entity),DevelopDto.class);

        return dto;

    }

    public  DevelopDto update(DevelopDto person) {

        if (person == null) throw new RequiredObjectIsNullException();
        logger.info("updating a Dev!");
        var entity = repository.findById(person.getIdUsuario()).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        entity.setNome(person.getNome());
        entity.setEmail(person.getEmail());
        entity.setSenha(person.getSenha());
        entity.setEstado(person.getEstado());
        entity.setCidade(person.getCidade());
        entity.setTelefone(person.getTelefone());
        entity.setDataNascimento(person.getDataNascimento());
        entity.setCpf(person.getCpf());
        var dto = DozerMapper.parseObject(repository.save(entity), DevelopDto.class);
        return dto;


    }

    public  void delete(UUID id){

        logger.info("Deleting one person!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        repository.delete(entity);
    }


}
