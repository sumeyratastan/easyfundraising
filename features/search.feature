Feature: Searching the list of charities in easyfundraising Website

  Scenario Outline: As a user, I can search charity from the search list

    Given I am on the home page
    When I click Find a cause button
    Then I start to write <characters> into the search box
    Then I click search button
    Then I verify that the selected 3rd Cause exists in the Search results

Examples:
      |characters|
      |sum|
      |asd|
      |mkt|