package bank;

import io.cucumber.java.en.*;
import org.junit.jupiter.api.Assertions.*;

public class StepDefinitions {

    private int accountBalance;
    private int depositAmount;
    private int actualBalance;

    @Given("my account has a balance of ${int}")
    public void my_account_has_a_balance_of_$(int balance) {
        accountBalance = balance;
    }
    @And("I make a deposit of ${int}")
    public void i_make_a_deposit_of_$(int deposit) {
        depositAmount = deposit;
    }
    @When("I check the balance")
    public void i_check_the_balance() {
        actualBalance = accountBalance + depositAmount;
    }
    @Then("the available balance should be ${int}")
    public void the_available_balance_should_be_$(int expectedBalance) {
        System.out.println(expectedBalance + " " + actualBalance);
        assert expectedBalance == actualBalance;
    }
}