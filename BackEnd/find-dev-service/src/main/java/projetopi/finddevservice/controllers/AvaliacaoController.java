package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.dtos.v1.request.NovaAvaliacaoRequestDto;
import projetopi.finddevservice.dtos.v1.response.AvaliacaoResponseDto;
import projetopi.finddevservice.services.AvaliacaoService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/vi/avaliacoes")
public class AvaliacaoController {


    @Autowired
    AvaliacaoService service;

    @PostMapping
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<AvaliacaoResponseDto> post(@RequestBody @Valid
                                                     NovaAvaliacaoRequestDto novaAvaliacaoRequest) {
        AvaliacaoResponseDto resposta = service.post(novaAvaliacaoRequest);
//        novaAvaliacaoRequest.isCompany() ? colocar o metodo que vai trocar a vaga para encerrada

        return ResponseEntity.status(201).body(resposta);
    }


}
