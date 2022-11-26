package projetopi.finddevservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetopi.finddevservice.dtos.v1.request.VagaRequestDto;
import projetopi.finddevservice.dtos.v1.response.VagaResponseDto;
import projetopi.finddevservice.models.Vaga;
import projetopi.finddevservice.services.VagasService;

@RestController
@RequestMapping("/vagas")
public class VagasController {

    @Autowired
    private VagasService service;

    @PostMapping
    public ResponseEntity<VagaResponseDto> save(@RequestBody VagaRequestDto vagaRequestDto) {
        return ResponseEntity.ok().build();
    }
}
