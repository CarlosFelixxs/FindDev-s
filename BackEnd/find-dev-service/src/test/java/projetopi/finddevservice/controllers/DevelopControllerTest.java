package projetopi.finddevservice.controllers;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import projetopi.finddevservice.dtos.v1.request.DevelopRequestDto;
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


//    @Test
//    void create() throws Exception {
//        DevelopRequestDto dto = Mockito.mock(DevelopRequestDto.class);
//        Mockito.when(service.create(dto)).thenReturn(dto);
//        ResponseEntity<DevelopRequestDto> response = developController.create(dto);
//        Mockito.verify(service,Mockito.times(1)).create(dto);
//        assertEquals(400,response.getStatusCode());
//
//    }
}