package projetopi.finddevservice.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetopi.finddevservice.dtos.v1.DevelopDto;
import projetopi.finddevservice.services.DesenvolvedorService;
import projetopi.finddevservice.util.MediaType;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/v1/dev")
@Tag(name = "Developer", description = "Endpoints for Managing devs")
public class DevelopController {

    @Autowired
    private DesenvolvedorService service;

    @GetMapping(produces = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML})
    @Operation(
        summary = "Find all Developers ", description = "Find all Developers ",
        tags = {"Develop"},
        responses = {
                @ApiResponse(description = "Success", responseCode = "200", content = {
                        @Content(
                                mediaType = "application/json",
                                array = @ArraySchema(schema = @Schema(implementation = DevelopDto.class))
                        )
                }),
                @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
        }
    )
    public ResponseEntity<List<DevelopDto>> findAllDevs() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON)
    @Operation(
        summary = "Finds a Developer ", description = "Finds a Developer ",
        tags = {"People"},
        responses = {
                @ApiResponse(description = "Success", responseCode = "200", content = @Content(schema = @Schema(implementation = DevelopDto.class))
                ),
                @ApiResponse(description = "No content", responseCode = "204", content = @Content),
                @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content)
        }
    )
    public ResponseEntity<DevelopDto> findById(@PathVariable(value = "id") UUID id) {
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping(
            consumes = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML},
            produces = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML})
    @Operation(
        summary = "Adds a new Developer",
        description = "Adds a new Developers by passing in a JSON, XML or YML representation of the Developers!",
        tags = {"Developers"},
        responses = {
                @ApiResponse(description = "Success", responseCode = "200",
                        content = @Content(schema = @Schema(implementation = DevelopDto.class))
                ),
                @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
        }
    )
    public ResponseEntity<DevelopDto> create(@RequestBody @Valid DevelopDto dev) {
        return ResponseEntity.ok(service.create(dev));
    }

    @PutMapping(
            consumes = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML},
            produces = {MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML, MediaType.APPLICATION_YML})
    @Operation(
        summary = "Updates a Developer",
        description = "Updates a Developer by passing in a JSON, XML or YML representation of the Developer!",
        tags = {"People"},
        responses = {
                @ApiResponse(description = "Updated", responseCode = "200",
                        content = @Content(schema = @Schema(implementation = DevelopDto.class))
                ),
                @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
        }
    )
    public ResponseEntity<DevelopDto> update(@RequestBody DevelopDto person) {
        return ResponseEntity.ok(service.update(person));
    }

    @DeleteMapping(value = "/{id}")
    @Operation(summary = "Deletes a Developer",
            description = "Deletes a Developer by passing in a JSON, XML or YML representation of the Developer!",
            tags = {"People"},
            responses = {
                    @ApiResponse(description = "No Content", responseCode = "204", content = @Content),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Not Found", responseCode = "404", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    public ResponseEntity<?> delete(@PathVariable(value = "id") UUID id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
