Feature: website
  As a user of rottenPotatosJs
  I want to see the title of the website
  So that I know cucumber.js works

  Scenario: Accessing website
    Given I am on Chrome
    When I type "rottenpotatoswfu.herokuapp.com"
    Then I should see "Rotten Potatos"
