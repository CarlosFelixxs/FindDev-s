package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.DeveloperStatus;
import projetopi.finddevservice.enums.SubscriptionPlan;

import javax.persistence.Entity;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.persistence.Transient;

import java.util.Map;

import static projetopi.finddevservice.enums.DeveloperStatus.AVAILABLE;

@Entity
@Table(name ="TB_USER_DEVELOP")
//@SecondaryTable( ) <== usar essa ou criar mais de uma tabela?
public class Developer extends User {

    @Getter @Setter
    private DeveloperStatus status = AVAILABLE;

    @Transient @Getter @Setter
    private Role role;


    public Developer() {
    }

    public Developer(String name, String email, String password, Map<User, Integer> mapRates, SubscriptionPlan subscriptionPlan, DeveloperStatus status, Role role) {
        super(name, email, password, mapRates, subscriptionPlan);
        this.status = status;
        this.role = role;
    }

    @Override
    public void rate(User user, Integer rate) {
        user.getMapRates().put(this, rate);
    }
}
