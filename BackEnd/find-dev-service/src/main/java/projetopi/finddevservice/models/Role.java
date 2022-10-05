package projetopi.finddevservice.models;

import lombok.Data;
import projetopi.finddevservice.enums.DeveloperRole;
import projetopi.finddevservice.enums.DeveloperSeniority;

@Data
public class Role {

    private String title;
    private String description;
    private DeveloperRole stack;
    private DeveloperSeniority seniority;

    public Role(
        String title,
        String description,
        DeveloperRole stack,
        DeveloperSeniority seniority
    ) {
        this.title = title;
        this.description = description;
        this.stack = stack;
        this.seniority = seniority;
    }
}
