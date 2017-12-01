Feature: In order to shop online
  As a user I should be able to register an account 


  Background:
    Given I am on the homepage
    
  @register  
  Scenario: User Registration with valid credentials
    When I click 'Sigh In' tab
    And I should be able on login account page
    And I click on 'Register' 
    Then I should be navigated to account registration page
    And I enter all the required registration details
    Then I hit 'Submit'
    And I should be directed to 'My Account' section
    #And I 'Log out'