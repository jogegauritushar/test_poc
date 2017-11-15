const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) =>
{
    let hp = client.page.kurtgeiger.homePage();
    let plp = client.page.kurtgeiger.plpPage();
    let pdp = client.page.kurtgeiger.pdpPage();
    let cp = client.page.kurtgeiger.checkoutPage();

    Given(/^I am on the "([^"]*)" homepage$/, function (homepage) {
        client.maximizeWindow();
        return client
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', homepage);
    });

    Given(/^I am on PDP$/, function () {
        return plp.selectProduct();            
    });

  
    When(/^I select any colour and size$/, function () {
            return pdp.selectColourAndSize()
                  
    });

    When(/^I add the product to the bag$/, function () {
        return pdp.addToBag()
                  
    });

    Then(/^I should go to 'My Bag' and assert bag quantity$/, function () {
      return pdp.checkMyBag();
    });


    Then(/^I click 'Proceed to checkout'$/, function () {
        return cp.proceedCheckout();
    });

    Then('I should be on checkout page', function () {
        return client
            .assert.urlContains("checkout/order/");

    });
});
