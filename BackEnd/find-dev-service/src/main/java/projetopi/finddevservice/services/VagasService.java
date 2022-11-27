package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.controllers.VagasController;
import projetopi.finddevservice.dtos.v1.request.VagaRequestDto;
import projetopi.finddevservice.dtos.v1.response.VagaResponseDto;
import projetopi.finddevservice.exceptions.ResourceNotFoundException;
import projetopi.finddevservice.mapper.DozerMapper;
import projetopi.finddevservice.models.Vaga;
import projetopi.finddevservice.repositories.VagasRepository;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.util.logging.Logger;

@Service
public class VagasService {

    @Autowired
    private VagasRepository repository;

    private final Logger logger = Logger.getLogger(VagasService.class.getName());

    public VagaResponseDto create(VagaRequestDto vagaRequest) {
        logger.info("Criando vaga da empresa " + vagaRequest.getEmpresaResponseDto().getNome());

        Vaga vaga = DozerMapper.parseObject(vagaRequest, Vaga.class);

        VagaResponseDto responseDto = DozerMapper.parseObject(repository.save(vaga), VagaResponseDto.class);
        responseDto.add(
            linkTo(
                methodOn(VagasController.class)
                    .findById(responseDto.getKey())
            ).withSelfRel()
        );
        return responseDto;
    }

    public VagaResponseDto findById(int id) {
        logger.info("Consultando Vaga com id " + id);

        Vaga vagaEncontrada = repository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("Id " + id + " não encontrado!")
        );

        VagaResponseDto responseDto = DozerMapper.parseObject(vagaEncontrada, VagaResponseDto.class);
        responseDto.add(
            linkTo(
                methodOn(VagasController.class)
                    .findById(id)
            ).withSelfRel()
        );

        return responseDto;
    }
}
