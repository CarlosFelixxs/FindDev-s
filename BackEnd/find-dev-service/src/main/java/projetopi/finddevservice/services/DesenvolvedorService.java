package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.controllers.DesenvolvedorController;
import projetopi.finddevservice.dtos.v1.request.DevelopRequestDto;
import projetopi.finddevservice.dtos.v1.response.DevelopResponseDto;
import projetopi.finddevservice.exceptions.RequiredExistingObjectException;
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

    private final Logger logger = Logger.getLogger(DesenvolvedorService.class.getName());

    public List<DevelopResponseDto> findAll() {

        logger.info("Finding all Devs!");

        var person = DozerMapper.parseListObjects(repository.findAll(), DevelopResponseDto.class);
        person
                .stream()
                .forEach(p -> {
                    try {
                        p.add(linkTo(methodOn(DesenvolvedorController.class).findById(p.getKey())).withSelfRel());
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                });

        return person;
    }

    public DevelopResponseDto findById(UUID id) {

        logger.info("Finding a Dev!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));
        var dto = DozerMapper.parseObject(entity, DevelopResponseDto.class);
        dto.add(linkTo(methodOn(DesenvolvedorController.class).findById(id)).withSelfRel());
        return dto;

    }

    public DevelopResponseDto create(DevelopRequestDto person) {

        logger.info("Checking existence!");
        if (existByEmail(person.getEmail())) throw new RequiredExistingObjectException("Email already in use!");
        if (existByCpf(person.getCpf())) throw new RequiredExistingObjectException("Cpf already in use!");

        logger.info("Create a Dev!");
        var entity = DozerMapper.parseObject(person, DesenvolvedorModel.class);
        var dto = DozerMapper.parseObject(repository.save(entity), DevelopResponseDto.class);
        dto.add(linkTo(methodOn(DesenvolvedorController.class).findById(dto.getKey())).withSelfRel());
        return dto;

    }

    public Boolean existByCpf(String cnpj) {

        if (repository.existsByCpf(cnpj)) {
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

    public DevelopResponseDto update(DevelopRequestDto person) {

        if (person == null) throw new RequiredObjectIsNullException();

        logger.info("updating a Dev!");
        var entity = repository.findById(person.getKey()).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));

        if (!entity.getEmail().equalsIgnoreCase(person.getEmail())) {
            if (existByEmail(person.getEmail())) throw new RequiredExistingObjectException("Email already in use!");
            entity.setEmail(person.getEmail().isEmpty() ? entity.getEmail() : person.getEmail());
        }
        if (!entity.getCpf().equalsIgnoreCase(person.getCpf())) {
            if (existByCpf(person.getCpf())) throw new RequiredExistingObjectException("Cpf already in use!");
            entity.setCpf(person.getCpf().isEmpty() ? entity.getCpf() : person.getCpf());
        }
        entity.setNome(person.getNome().isEmpty() ? entity.getNome() : person.getNome());
        entity.setEstado(person.getEstado().isEmpty() ? entity.getEstado() : person.getEstado());
        entity.setCidade(person.getCidade().isEmpty() ? entity.getCidade() : person.getCidade());
        entity.setTelefone(person.getTelefone().isEmpty() ? entity.getTelefone() : person.getTelefone());
        entity.setDataNascimento(person.getDataNascimento() == null ? entity.getDataNascimento() : person.getDataNascimento());

        var dto = DozerMapper.parseObject(repository.save(entity), DevelopResponseDto.class);
        dto.add(linkTo(methodOn(DesenvolvedorController.class).findById(dto.getKey())).withSelfRel());
        return dto;

    }

    public void delete(UUID id) {

        logger.info("Deleting one dev!");
        var entity = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No records found for this id!"));
        repository.delete(entity);
    }

}
