Feature: Bank Check Balance

  @accountBalance
  Scenario Outline: Check balance after Deposit
    Given my account has a balance of $<balance>
    And I make a deposit of $<deposit>
    When I check the balance
    Then the available balance should be $<expectedBalance>
    @ex1
    Examples:
      |balance|deposit|expectedBalance|
      |500    |100    |600            |
      |600    |100    |700            |
      |700    |100    |800            |