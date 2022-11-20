package projetopi.finddevservice.controllers;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import projetopi.finddevservice.dtos.v1.DevelopDto;
import projetopi.finddevservice.repositories.DesenvolvedorRepository;
import projetopi.finddevservice.services.DesenvolvedorService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = DevelopController.class)
class DevelopControllerTest {

    @Autowired
    DevelopController developController;
    @MockBean
    DesenvolvedorRepository repository;
    @MockBean
    DesenvolvedorService service;


    @Test
    void create() throws Exception {
        DevelopDto dto = Mockito.mock(DevelopDto.class);
        Mockito.when(service.create(dto)).thenReturn(dto);
        ResponseEntity<DevelopDto> response = developController.create(dto);
        Mockito.verify(service,Mockito.times(1)).create(dto);
        assertEquals(400,response.getStatusCode());

    }
}