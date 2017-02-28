Feature: website
  As a creator of rottenPotatosJs
  I want to add and remove movies
  So that I can manage the database over time

  Scenario: Accessing website
    Given I am on Chrome
    When I enter "http://rottenpotatoswfu.herokuapp.com"
    Then I should see "Rotten Potatos"

  Scenario: About link
    Given I am on Chrome
    When I enter "http://rottenpotatoswfu.herokuapp.com"
    Then I should see "Submit"

  Scenario: Entering a movie
    Given I am on "http://rottenpotatoswfu.herokuapp.com"
    When I enter 'Father of the bride' as title
    And 'PG' as rating
    Then I should see 'Father of the bride' in the movie list
