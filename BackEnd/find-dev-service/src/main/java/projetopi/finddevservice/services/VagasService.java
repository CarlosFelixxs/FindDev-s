package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.controllers.VagasController;
import projetopi.finddevservice.dtos.v1.request.VagaRequestDto;
import projetopi.finddevservice.dtos.v1.response.CandidaturaResponseDto;
import projetopi.finddevservice.dtos.v1.response.VagaResponseDto;
import projetopi.finddevservice.exceptions.ResourceNotFoundException;
import projetopi.finddevservice.mapper.DozerMapper;
import projetopi.finddevservice.models.Vaga;
import projetopi.finddevservice.repositories.EmpresaRepository;
import projetopi.finddevservice.repositories.VagasRepository;

import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

@Service
public class VagasService {

    @Autowired
    private VagasRepository repository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private CandidaturasService candidaturasService;

    private final Logger logger = Logger.getLogger(VagasService.class.getName());

    public VagaResponseDto create(VagaRequestDto vagaRequest) {
        UUID idEmpresa = vagaRequest.getIdEmpresa();
        logger.info("Buscando por empresa com id " + idEmpresa);

        if (!empresaRepository.existsById(idEmpresa)) {
            throw new ResourceNotFoundException("Nenhuma empresa encontrada");
        }

        logger.info("Criando vaga para a empresa");

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

    public List<VagaResponseDto> findAll() {
        List<VagaResponseDto> responseDto = repository.findAll()
            .stream()
            .map(vaga -> DozerMapper.parseObject(vaga, VagaResponseDto.class))
            .collect(Collectors.toList());

        responseDto.forEach(v -> {
                try {
                    v.setCandidaturas(findAllCandidaturas(v.getKey()));
                    v.add(
                        linkTo(
                            methodOn(VagasController.class)
                                .findById(v.getKey())
                        ).withSelfRel()
                    );
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        );

        return responseDto;
    }

    public List<VagaResponseDto> findAllByIdEmpresa(UUID idEmpresa) {
        if (!empresaRepository.existsById(idEmpresa)) {
            throw new ResourceNotFoundException("Empresa com id " + idEmpresa + " não encontrada");
        }

        logger.info("Buscando vagas da empresa");

        List<VagaResponseDto> responseDto = repository.findByIdEmpresa(idEmpresa)
            .stream()
            .map(vaga -> DozerMapper.parseObject(vaga, VagaResponseDto.class))
            .collect(Collectors.toList());

        responseDto.forEach(v -> {
                try {
                    v.setCandidaturas(findAllCandidaturas(v.getKey()));
                    v.add(
                        linkTo(
                            methodOn(VagasController.class)
                                .findById(v.getKey())
                        ).withSelfRel()
                    );
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
        );

        return responseDto;
    }

    public List<CandidaturaResponseDto> findAllCandidaturas(int idVaga) {
        return candidaturasService.findAllByIdVaga(idVaga);
    }
}
