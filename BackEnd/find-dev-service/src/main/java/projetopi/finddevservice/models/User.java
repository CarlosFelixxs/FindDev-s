package projetopi.finddevservice.models;

import lombok.Data;
import projetopi.finddevservice.enums.SubscriptionPlan;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Map;
import java.util.UUID;

@Data
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name ="TB_USER")
public abstract class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected UUID id;

    @Size(min = 3, max = 45)
    protected String name;

    @Email
    protected String email;

    @Pattern(
        regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    )
    protected String password;
    protected Map<User, Integer> mapRates;
//   Pode usar map jpa para criaçao ???
    protected SubscriptionPlan subscriptionPlan;

    public User() {
    }

    public User(String name, String email, String password, Map<User, Integer> mapRates, SubscriptionPlan subscriptionPlan) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.mapRates = mapRates;
        this.subscriptionPlan = subscriptionPlan;
    }

    public abstract void rate(User user, Integer nota);

    public double getAverageRating() {
        return (double) mapRates.values()
                .stream()
                .reduce(0, Integer::sum) / mapRates.size();
    }
}
