package projetopi.finddevservice.models;

import projetopi.finddevservice.enums.DeveloperStatus;

import static projetopi.finddevservice.enums.DeveloperStatus.AVAILABLE;

public class Developer extends User {

    private DeveloperStatus status = AVAILABLE;
    private Role role;

    @Override
    public void rate(User user, Integer rate) {
        user.getMapRates().put(this, rate);
    }

    public DeveloperStatus getStatus() {
        return status;
    }

    public Role getRole() {
        return role;
    }

    public void setStatus(DeveloperStatus status) {
        this.status = status;
    }

    public void setCargo(Role role) {
        this.role = role;
    }
}
