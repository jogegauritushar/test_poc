Feature: As a user
  I want to buy products and checkout securely


  Background:
    Given I am on PDP
    And I select any colour and size
    And I add the product to the bag

@newcheckout
  Scenario:  Guest Checkout with same billing and delivery address
    And I can see the bag with single item
    And I click 'Proceed to Checkout'
    And I should be on checkout page
    Then I checkout as a guest
    And I enter all the billing and delivery details
    And I click 'Continue to Payment'
    Then I should be on the payment summary page
