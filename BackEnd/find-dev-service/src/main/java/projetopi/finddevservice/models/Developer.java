package projetopi.finddevservice.models;

import lombok.Getter;
import lombok.Setter;
import projetopi.finddevservice.enums.DeveloperStatus;

import javax.persistence.Entity;
import javax.persistence.Transient;

import static projetopi.finddevservice.enums.DeveloperStatus.AVAILABLE;

@Entity
public class Developer extends User {

    @Getter @Setter
    private DeveloperStatus status = AVAILABLE;

    @Transient @Getter @Setter
    private Role role;

    @Override
    public void rate(User user, Integer rate) {
        user.getMapRates().put(this, rate);
    }
}
