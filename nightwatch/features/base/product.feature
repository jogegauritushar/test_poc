Feature: Product -> add product to basket
  As a user
  I would like to be able to search for a product and access to the product details
  So that I can add the product to my basket

  Background:
    Given I am on the homepage

  @product
  Scenario Outline: Search for a product
    When I search for a random <Item>
    Then the product listing page should display a list of products

    Examples:
    |Item    |
    |Boots      |
    #|Kurt Geiger|
    #|Flats      |
    #|Kids       |
    #|Carvela    |