Feature: Checkout ->As a user
  I want to buy products and checkout securely


  Background:
    And I am on PDP
    And I select any colour and size
    And I add the product to the bag


  Scenario:  Guest Checkout with same billing and delivery address
    And I can see the bag with single item
    And I click 'Proceed to Checkout'
    And I should be on checkout page
    Then I checkout as a guest
    And I enter all the billing and delivery details
    And I click 'Continue to Payment'
    Then I should be on the payment summary page

    @newcheckout
  Scenario: Guest Checkout with different billing and delivery address
    And I can see the bag with single item
    And I click 'Proceed to Checkout'
    And I should be on checkout page
    Then I checkout as a guest
    And I enter all the billing and delivery details
    And I select the option for different billing address
    And I enter different billing details
    And I click 'Continue to Payment'
    #Then I should be able to see different billing and delivery address

