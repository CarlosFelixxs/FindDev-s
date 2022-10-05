package projetopi.finddevservice.models;

import lombok.Data;
import projetopi.finddevservice.enums.DeveloperRole;
import projetopi.finddevservice.enums.DeveloperSeniority;

import javax.persistence.*;

@Data
@Entity
@Table(name = "ROLE")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
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

    public Role() {

    }
}
