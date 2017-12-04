Feature: User makes successful Visa payment as a guest user

As a user
I want to make visa payment as Secured Enrolled user
So that authenticate  user is verfified before payment is charged

Background:
    Given I am on PDP
    And I select any colour and size
    And I add the product to the bag
    And I can see the bag with single item
    And I click 'Proceed to Checkout'
    And I should be on checkout page

@payment
Scenario Outline: Visa 3D Secure payment
    When I checkout as a guest
    And I enter all the billing and delivery details
    And I click 'Continue to Payment'
    Then I should be on the payment summary page
    And I select to pay by card
    #And I select the <Credit Card>
    And I enter valid <Payment Details>
    And I provide the 3D secure password
    And I click 'Submit'
    #Then "Order Confirmation" message appears on screen


    Examples:
    |Payment Details      |
    |4929 0000 0000 6     |
    |5404 0000 0000 0001  |
#    |4462 0000 0000 0003  |
#    |4917 3000 0000 0008  |
#    |5573 4700 0000 0001  |
#    |6759 0000 0000 5     |




