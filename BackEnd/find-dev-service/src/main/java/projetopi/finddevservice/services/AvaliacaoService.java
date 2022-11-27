package projetopi.finddevservice.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetopi.finddevservice.dtos.v1.request.NovaAvaliacaoRequestDto;
import projetopi.finddevservice.dtos.v1.response.AvaliacaoResponseDto;
import projetopi.finddevservice.exceptions.ResourceNotFoundException;
import projetopi.finddevservice.models.AvaliacaoModel;
import projetopi.finddevservice.models.UsuarioModel;
import projetopi.finddevservice.repositories.AvaliacaoRepository;
import projetopi.finddevservice.repositories.UsuarioRepository;

import java.util.logging.Logger;

@Service
public class AvaliacaoService {

    @Autowired
    AvaliacaoRepository avaliacaoRepository;
    @Autowired
    UsuarioRepository userRepository;
    private final Logger logger = Logger.getLogger(DesenvolvedorService.class.getName());

    public AvaliacaoResponseDto post(NovaAvaliacaoRequestDto avaliacao) {
        logger.info("Checking if Ids exist!");
        if (!userRepository.existsById(avaliacao.getIdAvaliado()))
            throw new ResourceNotFoundException("Avaliado not Found!");
        if (!userRepository.existsById(avaliacao.getIdAvaliador()))
            throw new ResourceNotFoundException("Avaliador not Found!");

        logger.info("creating assessment!");

        AvaliacaoModel novaAvaliacao = new AvaliacaoModel();
        UsuarioModel avaliado = userRepository.findById(avaliacao.getIdAvaliado()).get();
        UsuarioModel avaliador = userRepository.findById(avaliacao.getIdAvaliador()).get();

        novaAvaliacao.setAvaliado(avaliado);
        novaAvaliacao.setAvaliador(avaliador);
        novaAvaliacao.setNota(avaliacao.getNota());
        novaAvaliacao.setComentario(avaliacao.getComentario());
        avaliacaoRepository.save(novaAvaliacao);

        AvaliacaoResponseDto entity = new AvaliacaoResponseDto();
        entity.setIdAvaliacao(novaAvaliacao.getIdAvaliacao());
        entity.setAvaliado(avaliado.getId());
        entity.setAvaliador(avaliador.getId());
        entity.setNota(avaliacao.getNota());
        entity.setDataHoraAvaliacao(novaAvaliacao.getDataHoraAvaliacao());
        entity.setComentario(avaliacao.getComentario());
        return entity;
    }


}
