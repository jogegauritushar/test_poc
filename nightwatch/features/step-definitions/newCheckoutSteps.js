const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {

    let launchUrl = client.launch_url;
    let hp = null;
    let plp = null;
    let pdp = null;
    let cp = null;
    let chp = null;
    let ap = null;

    if (launchUrl.search('shoeaholics') !== -1) {
        hp = client.page.shoeaholics.homePage();
        plp = client.page.shoeaholics.plpPage();
        pdp = client.page.shoeaholics.pdpPage();
        cp = client.page.shoeaholics.cartPage();
        chp = client.page.shoeaholics.checkoutPage();
        ap = client.page.shoeaholics.addressPage();

    }

    if (launchUrl.search('kurtgeiger') !== -1) {
        hp = client.page.kurtgeiger.homePage();
        plp = client.page.kurtgeiger.plpPage();
        pdp = client.page.kurtgeiger.pdpPage();
        cp = client.page.kurtgeiger.cartPage();
        chp = client.page.kurtgeiger.checkoutPage();
        ap = client.page.kurtgeiger.addressPage();
    }

    Given('I can see the bag with single item', function () {
        return  pdp.checkMyBag();
    });
    
    When(/^I should be on checkout page$/, function () {

        client.assert.urlContains('checkout')
    });

    Then(/^I checkout as a guest$/, function () {         
        return chp.guestCheckout();
    });

    Then(/^I enter all the billing and delivery details$/, function () {
         return chp.guestUserDetails();

    });
     
    Then(/^I click 'Continue to Payment'$/, function () {
         client.pause(2000);
         return chp.continuePayment();
    });

    Then(/^I should be on the payment summary page$/, function () {
         client.assert.urlContains('checkout')
    });

    Then('I select the option for different billing address', function () {
        return chp.diffAddress();
    });

    Then('I enter different billing details', function () {
        client.pause(2000);
        return ap.diffAddressDetails();
    });

    Then('I should be able to see different billing and delivery address', function () {
       client.pause(2000);
        client.assert.containsText('quote-data billing-address', '4 Dunedin Road');
        console.log('Dunedin Road')

    });

})
