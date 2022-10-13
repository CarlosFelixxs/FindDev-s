//package projetopi.finddevservice.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import projetopi.finddevservice.Exceptions.ContratacaoException;
//import projetopi.finddevservice.models.Empresa;
//import projetopi.finddevservice.models.Developer;
//import projetopi.finddevservice.models.Usuario;
//import projetopi.finddevservice.repositories.UsuarioRepository;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/user")
//public class UsuarioController {
//
//    @Autowired
//    private UsuarioRepository repository;
//
//    @PostMapping
//    public ResponseEntity<Usuario> post(@RequestBody Usuario usuario) {
//        repository.save(usuario);
//        return ResponseEntity.status(201).body(usuario);
//    }
//
//    @GetMapping
//    public ResponseEntity<List<Usuario>> get() {
//        List<Usuario> usuarios = repository.findAll();
//        return usuarios.isEmpty()
//                ? ResponseEntity.status(204).build()
//                : ResponseEntity.status(200).body(usuarios);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Usuario> get(@PathVariable long id){
//        return ResponseEntity.of(repository.findById(id));
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Double> getAverageRating(@PathVariable long id) {
//        if (!repository.existsById(id)) return ResponseEntity.notFound().build();
//
//        return ResponseEntity.ok().body(repository.findById(id).get().);
//    }
//
//    @PatchMapping("/{id}/id-avaliado/{idAvaliado}/nota/{nota}")
//    public ResponseEntity<Usuario> rate(
//            @PathVariable long id,
//            @PathVariable int nota,
//            @PathVariable long idAvaliado
//    ) {
//
//        if (!repository.existsById(id) || !repository.existsById(idAvaliado)) {
//            return ResponseEntity.notFound().build();
//        }
//
//        Usuario ratedUsuario = repository.findById(idAvaliado).get();
//
//        repository.findById(id).get().rate(ratedUsuario, nota);
//        return ResponseEntity.ok().body(ratedUsuario);
//    }
//
//    @GetMapping("/company/{id}/number-of-vacancies")
//    public ResponseEntity<Integer> getNumberOfVacancies(@PathVariable long id) {
//        if (!repository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        Usuario usuario = repository.findById(id).get();
//        if (!(usuario instanceof Empresa)) {
//            return ResponseEntity.status(405).build();
//        }
//
//        return ResponseEntity.ok().body(((Empresa) usuario).getNumberOfVacancies());
//    }
//
//    @GetMapping("/company/{id}/number-of-hired")
//    public ResponseEntity<Integer> getNumberOfHired(@PathVariable long id) {
//        if (!repository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        Usuario usuario = repository.findById(id).get();
//        if (!(usuario instanceof Empresa)) {
//            return ResponseEntity.status(405).build();
//        }
//
//        return ResponseEntity.ok().body(((Empresa) usuario).getNumberOfHiredDevelopers());
//    }
//
//    @PostMapping("/company/{id}/hire")
//    public ResponseEntity<Developer> hireDeveloper(
//        @RequestBody Developer dev,
//        @PathVariable long id
//    ) throws ContratacaoException {
//
//        if (!repository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        Usuario usuario = repository.findById(id).get();
//        if (!(usuario instanceof Empresa)) {
//            return ResponseEntity.status(405).build();
//        }
//
//        return ResponseEntity.ok().body(
//            ((Empresa) usuario).hire(dev, dev.getRole())
//        );
//    }
//}
