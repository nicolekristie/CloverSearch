Feature: Search

  Scenario: Search for a term
    Given User visits google
    When User searches for term "clover"
    Then User will see expected first item in list of results