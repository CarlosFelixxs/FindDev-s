package projetopi.finddevservice.models;

import lombok.Data;
import projetopi.finddevservice.enums.SubscriptionPlan;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Map;
import java.util.UUID;

@Data
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
    protected SubscriptionPlan subscriptionPlan;

    public abstract void rate(User user, Integer nota);

    public double getAverageRating() {
        return (double) mapRates.values()
                .stream()
                .reduce(0, Integer::sum) / mapRates.size();
    }
}
