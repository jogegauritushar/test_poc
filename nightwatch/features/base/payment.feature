Feature: Payment -> User makes successful Visa payment as a guest user

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

Scenario Outline: Credit Card 3D Secure payment(Enrolled) as a guest user
    When I checkout as a guest
    And I enter all the billing and delivery details
    And I click 'Continue to Payment'
    Then I should be on the payment summary page
    And I select to pay by card
    And I enter valid <Payment Details>
    And I provide the 3D secure password
    And I click 'Submit'
    Then Order Confirmation message appears on screen

    Examples:
    |Payment Details      |
    |4929 0000 0000 6     |
    #|5404 0000 0000 0001  |
    #|4462 0000 0000 0003  |
#    |4917 3000 0000 0008  |
#    |5573 4700 0000 0001  |
#    |6759 0000 0000 5     |

Scenario Outline: Credit Card 3D Secure payment(Not Enrolled, Unable to verify, Error) as a guest user
    When I checkout as a guest
    And I enter all the billing and delivery details
    And I click 'Continue to Payment'
    Then I should be on the payment summary page
    And I select to pay by card
    And I enter valid <Payment Details>
    And I click 'Submit'
    Then Order Confirmation message appears on the screen

    Examples:
    |Payment Details     |
    |4929 0000 0555 9    |
    |44929 0000 0001 4   |
    #|4929 0000 0002 2    |
    #|4484 0000 0000 2    |
    #|5404 0000 0000 0043 |
    #|5404 0000 0000 0084 |
    #|5404 0000 0000 0068 |

    @payment
Scenario Outline: Payment with invalid card number
    When I checkout as a guest
    And I enter all the billing and delivery details
    And I click 'Continue to Payment'
    Then I should be on the payment summary page
    And I select to pay by card
    And I enter invalid <Card Number>
    And I click 'Submit'
    #Then I should see an error message

        Examples:
    |Card Number     |
    |4929 0000 0555 90002    |
    #|44929 0000 0001 4000   |
    #|4929 0000 0002 2    |
    #|4484 0000 0000 2    |
    #|5404 0000 0000 0043 |
    #|5404 0000 0000 0084 |
    #|5404 0000 0000 0068 |






