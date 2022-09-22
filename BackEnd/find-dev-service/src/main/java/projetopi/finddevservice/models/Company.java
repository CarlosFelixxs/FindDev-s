package projetopi.finddevservice.models;

import projetopi.finddevservice.Exceptions.HiringException;

import java.util.ArrayList;
import java.util.List;

import static projetopi.finddevservice.enums.SubscriptionPlans.BASIC;
import static projetopi.finddevservice.enums.DeveloperStatus.WORKING;

public class Company extends User {

    private final List<Role> vacancies;
    private final List<Developer> hiredDevelopers;

    public Company() {
        this.vacancies = new ArrayList<>();
        this.hiredDevelopers = new ArrayList<>();
    }

    public void addVacancy(Role role) {
        vacancies.add(role);
    }

    public boolean hire(Developer dev, Role role) throws HiringException {
        checkHiring(dev, role);

        hiredDevelopers.add(dev);
        dev.setCargo(role);
        dev.setStatus(WORKING);
        return vacancies.remove(role);
    }

    private void checkHiring(Developer dev, Role role) throws HiringException {
        if (vacancies.isEmpty()) {
            throw new HiringException("No vacancy available for company " + name);
        }

        if (vacancies.stream().noneMatch(c -> c.equals(role))) {
            throw new HiringException("None available role matches " + role.getTitle());
        }

        if (dev.getSubscriptionPlans().equals(BASIC) && dev.getStatus().equals(WORKING)) {
            throw new HiringException("Developer " + dev.getName() + " is already working and has BASIC subscription");
        }

        if (!dev.getRole().equals(role)) {
            throw new HiringException(
                "Specified role " + role.getTitle() + " does not match to developer role (" + dev.getRole() + ")"
            );
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
