package projetopi.finddevservice.models;

import projetopi.finddevservice.enums.SubscriptionPlans;

import java.util.Map;

public abstract class User {

    protected int id;
    protected String name;
    protected String email;
    protected String password;
    protected Map<User, Integer> mapRates;
    protected SubscriptionPlans subscriptionPlans;

    public abstract void rate(User user, Integer nota);

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getUserPassword() {
        return password;
    }

    public Map<User, Integer> getMapRates() {
        return mapRates;
    }

    public double getAverageRating() {
        return (double) mapRates.values()
                .stream()
                .reduce(0, Integer::sum) / mapRates.size();
    }

    public SubscriptionPlans getSubscriptionPlans() {
        return subscriptionPlans;
    }
}
