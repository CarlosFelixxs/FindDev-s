package projetopi.finddevservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import projetopi.finddevservice.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
