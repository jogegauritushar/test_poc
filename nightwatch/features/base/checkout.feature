Feature: As a user
  I want to buy products and checkout securely


  Background:
    Given I am on the homepage

@test
  Scenario: Checkout
    When I am on PDP
    And I select any colour and size
    And I add the product to the bag
   Then I should go to 'My Bag' and assert bag quantity
   And I click 'Proceed to checkout'
   And I should be on Registeration page