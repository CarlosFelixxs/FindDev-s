package projetopi.finddevservice.models;

import projetopi.finddevservice.Exceptions.HiringException;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

import static projetopi.finddevservice.enums.SubscriptionPlan.BASIC;
import static projetopi.finddevservice.enums.DeveloperStatus.WORKING;

@Entity
@Table(name ="TB_USER_COMPANY")
public class Company extends User {

    private final List<Role> vacancies;
    private final List<Developer> hiredDevelopers;


    public Company() {
        this.vacancies = new ArrayList<>();
        this.hiredDevelopers = new ArrayList<>();
    }

//    falta um constutor????

    public void addVacancy(Role role) {
        vacancies.add(role);
    }

    public Developer hire(Developer dev, Role role) throws HiringException {
        checkHiring(dev, role);

        hiredDevelopers.add(dev);
        dev.setStatus(WORKING);
        vacancies.remove(role);
        return dev;
    }

    private void checkHiring(Developer dev, Role role) throws HiringException {
        if (vacancies.isEmpty()) {
            throw new HiringException("No vacancy available for company " + name);
        }

        if (vacancies.stream().noneMatch(c -> c.equals(role))) {
            throw new HiringException("None available role matches " + role.getTitle());
        }

        if (dev.getSubscriptionPlan().equals(BASIC) && dev.getStatus().equals(WORKING)) {
            throw new HiringException("Developer " + dev.getName() + " is already working and has BASIC subscription");
        }
    }

    public int getNumberOfVacancies() {
        return vacancies.size();
    }

    public int getNumberOfHiredDevelopers() {
        return hiredDevelopers.size();
    }

    @Override
    public void rate(User user, Integer nota) {
        user.getMapRates().put(this, nota);
    }
}
