const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {

    let launchUrl = client.launch_url;
    let hp = null;
    let plp = null;
    let pdp = null;
    let cp = null;

    if (launchUrl.search('shoeaholics') !== -1) {
        hp = client.page.shoeaholics.homePage();
        plp = client.page.shoeaholics.plpPage();
        pdp = client.page.shoeaholics.pdpPage();
        cp = client.page.shoeaholics.cartPage();
    }

    if (launchUrl.search('kurtgeiger') !== -1) {
        hp = client.page.kurtgeiger.homePage();
        plp = client.page.kurtgeiger.plpPage();
        pdp = client.page.kurtgeiger.pdpPage();
        cp = client.page.kurtgeiger.cartPage();
    }

    Given(/^I am on the homepage$/, () => {
        client.maximizeWindow();
         client
            .waitForElementVisible('body', 1000);

    });

    Given(/^I am on PDP$/, function () {
          hp.chooseHeaderCategory()
            return plp.selectProduct()
    });

    When(/^I select any colour and size$/, function () {
        return pdp.selectColourAndSize();
    });

    When(/^I add the product to the bag$/, function () {
        return pdp.addToBag();
    });

    Then(/^I should go to 'My Bag' and assert bag quantity$/, function () {
        return  pdp.checkMyBag();
    });

    Then(/^I click 'Proceed to Checkout'$/, function () {
        return cp.proceedToCheckout();
    });
    When(/^I should be on Registeration page$/, function () {

        client.assert.urlContains('checkout')
    });
})
