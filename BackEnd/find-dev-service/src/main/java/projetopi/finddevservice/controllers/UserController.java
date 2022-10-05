//package projetopi.finddevservice.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import projetopi.finddevservice.Exceptions.HiringException;
//import projetopi.finddevservice.models.Company;
//import projetopi.finddevservice.models.Developer;
//import projetopi.finddevservice.models.User;
//import projetopi.finddevservice.repositories.UserRepository;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/user")
//public class UserController {
//
//    @Autowired
//    private UserRepository repository;
//
//    @PostMapping
//    public ResponseEntity<User> post(@RequestBody User user) {
//        repository.save(user);
//        return ResponseEntity.status(201).body(user);
//    }
//
//    @GetMapping
//    public ResponseEntity<List<User>> get() {
//        List<User> users = repository.findAll();
//        return users.isEmpty()
//                ? ResponseEntity.status(204).build()
//                : ResponseEntity.status(200).body(users);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<User> get(@PathVariable long id){
//        return ResponseEntity.of(repository.findById(id));
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Double> getAverageRating(@PathVariable long id) {
//        if (!repository.existsById(id)) return ResponseEntity.notFound().build();
//
//        return ResponseEntity.ok().body(repository.findById(id).get().getAverageRating());
//    }
//
//    @PatchMapping("/{id}/id-avaliado/{idAvaliado}/nota/{nota}")
//    public ResponseEntity<User> rate(
//            @PathVariable long id,
//            @PathVariable int nota,
//            @PathVariable long idAvaliado
//    ) {
//
//        if (!repository.existsById(id) || !repository.existsById(idAvaliado)) {
//            return ResponseEntity.notFound().build();
//        }
//
//        User ratedUser = repository.findById(idAvaliado).get();
//
//        repository.findById(id).get().rate(ratedUser, nota);
//        return ResponseEntity.ok().body(ratedUser);
//    }
//
//    @GetMapping("/company/{id}/number-of-vacancies")
//    public ResponseEntity<Integer> getNumberOfVacancies(@PathVariable long id) {
//        if (!repository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        User user = repository.findById(id).get();
//        if (!(user instanceof Company)) {
//            return ResponseEntity.status(405).build();
//        }
//
//        return ResponseEntity.ok().body(((Company) user).getNumberOfVacancies());
//    }
//
//    @GetMapping("/company/{id}/number-of-hired")
//    public ResponseEntity<Integer> getNumberOfHired(@PathVariable long id) {
//        if (!repository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        User user = repository.findById(id).get();
//        if (!(user instanceof Company)) {
//            return ResponseEntity.status(405).build();
//        }
//
//        return ResponseEntity.ok().body(((Company) user).getNumberOfHiredDevelopers());
//    }
//
//    @PostMapping("/company/{id}/hire")
//    public ResponseEntity<Developer> hireDeveloper(
//        @RequestBody Developer dev,
//        @PathVariable long id
//    ) throws HiringException {
//
//        if (!repository.existsById(id)) {
//            return ResponseEntity.notFound().build();
//        }
//        User user = repository.findById(id).get();
//        if (!(user instanceof Company)) {
//            return ResponseEntity.status(405).build();
//        }
//
//        return ResponseEntity.ok().body(
//            ((Company) user).hire(dev, dev.getRole())
//        );
//    }
//}
