package projetopi.finddevservice.models;

import projetopi.finddevservice.enums.DeveloperRoles;

public class Role {

    private DeveloperRoles title;
    private String description;

    public Role(DeveloperRoles title, String description) {
        this.title = title;
        this.description = description;
    }

    public DeveloperRoles getTitle() {
        return title;
    }

    public void setTitle(DeveloperRoles title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
