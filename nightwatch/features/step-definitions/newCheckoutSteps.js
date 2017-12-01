const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {

    let launchUrl = client.launch_url;
    let hp = null;
    let plp = null;
    let pdp = null;
    let cp = null;
    let chp = null;

    if (launchUrl.search('shoeaholics') !== -1) {
        hp = client.page.shoeaholics.homePage();
        plp = client.page.shoeaholics.plpPage();
        pdp = client.page.shoeaholics.pdpPage();
        cp = client.page.shoeaholics.cartPage();
        chp = client.page.shoeaholics.checkoutPage();

    }

    if (launchUrl.search('kurtgeiger') !== -1) {
        hp = client.page.kurtgeiger.homePage();
        plp = client.page.kurtgeiger.plpPage();
        pdp = client.page.kurtgeiger.pdpPage();
        cp = client.page.kurtgeiger.cartPage();
        chp = client.page.kurtgeiger.checkoutPage();
    }

    Given('I can see the bag with single item', function () {
        return  pdp.checkMyBag();
    });

    /*Then(/^I click 'Proceed to checkout'$/, function () {
        return cp.proceedToCheckout();
    });*/
    
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
         client.pause(5000)
         return chp.continuePayment();
    });

    Then(/^I should be on the payment summary page$/, function () {
         return client.assert.urlContains('checkout')
    });
    

})
