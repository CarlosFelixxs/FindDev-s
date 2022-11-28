package projetopi.finddevservice.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.dtos.v1.request.VagaRequestDto;
import projetopi.finddevservice.dtos.v1.response.VagaResponseDto;
import projetopi.finddevservice.services.VagasService;
import projetopi.finddevservice.util.MediaType;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/vagas")
@Tag(name = "Vagas",description = "Endpoints for managing Vagas")
public class VagasController {

    @Autowired
    private VagasService service;

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML},
            produces = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML}
    )
    @Operation(
        summary = "Adds a new Vaga",
        description = "Adds a new Vaga by passing in a JSON, XML or YML representation of the Vaga!",
        tags = {"Vagas"},
        responses = {
            @ApiResponse(
                description = "Success", responseCode = "200",
                content = @Content(schema = @Schema(implementation = VagaRequestDto.class))
            ),
            @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
            @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
            @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
        }
    )
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<VagaResponseDto> save(@RequestBody @Valid VagaRequestDto vagaRequestDto) {
        return ResponseEntity.status(201).body(service.create(vagaRequestDto));
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON)
    @Operation(
        summary = "Finds a Vaga", description = "Finds a Vaga by its id",
        tags = {"Vagas"},
        responses = {
            @ApiResponse(
                description = "Success", responseCode = "200",
                content = @Content(schema = @Schema(implementation = VagaRequestDto.class))
            ),
            @ApiResponse(description = "No content", responseCode = "204", content = @Content),
            @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
            @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
            @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
        }
    )
    public ResponseEntity<VagaResponseDto> findById(@PathVariable int id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping(produces = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML})
    @Operation(
        summary = "Finds all Vagas ", description = "Finds all Vagas ",
        tags = {"Vagas"},
        responses = {
            @ApiResponse(description = "Success", responseCode = "200", content = {
                @Content(
                    mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = VagaRequestDto.class))
                )
            }),
            @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
            @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
            @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
            @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
        }
    )
    public ResponseEntity<List<VagaResponseDto>> findAll() {
        List<VagaResponseDto> vagas = service.findAll();

        return vagas.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(vagas);
    }

    @GetMapping(value = "/{idEmpresa}", produces = MediaType.APPLICATION_JSON)
    @Operation(
        summary = "Finds all Vagas from a Empresa", description = "Finds a list of vaga from Empresa id",
        tags = {"Vagas"},
        responses = {
            @ApiResponse(
                description = "Success", responseCode = "200",
                content = @Content(schema = @Schema(implementation = VagaRequestDto.class))
            ),
            @ApiResponse(description = "No content", responseCode = "204", content = @Content),
            @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
            @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
            @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
        }
    )
    public ResponseEntity<List<VagaResponseDto>> findAllByIdEmpresa(@PathVariable UUID id) {
        List<VagaResponseDto> vagas = service.findAllByIdEmpresa(id);

        return vagas.isEmpty() ? ResponseEntity.noContent().build() : ResponseEntity.ok(vagas);
    }

    @GetMapping(value = "/desenvolvedor/{idDesenvolvedor}", produces = MediaType.APPLICATION_JSON)
    @Operation(
        summary = "Finds all Vagas from a Desenvolvedor", description = "Finds a list of vaga from Desenvolvedor id",
        tags = {"Vagas"},
        responses = {
            @ApiResponse(
                description = "Success", responseCode = "200",
                content = @Content(schema = @Schema(implementation = VagaRequestDto.class))
            ),
            @ApiResponse(description = "No content", responseCode = "204", content = @Content),
            @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
            @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
            @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
        }
    )
    public ResponseEntity<List<VagaResponseDto>> findAllByIdDesenvolvedor(@PathVariable UUID idEmpresa) {
        return ResponseEntity.ok().build();
    }
}
