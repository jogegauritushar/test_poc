const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {

    let hp = client.page.shoeaholics.homePage();
    let plp = client.page.shoeaholics.plpPage();
    let pdp = client.page.shoeaholics.pdpPage();
    let cp = client.page.shoeaholics.cartPage();
    let hp = client.page.kurtgeiger.homePage();
    let plp = client.page.kurtgeiger.plpPage();
    let pdp = client.page.kurtgeiger.pdpPage();
    let cp = client.page.kurtgeiger.cartPage();


    Given('I am on the homepage', function (homepage){
        client.maximizeWindow();
        return client
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', homepage);
    });

    Given(/^I am on PDP$/, function () {
        console.log('dhfgrgfgfd-----');
         client.pause(1000);
         hp.chooseHeaderCategory()
         return plp.selectProduct();
    });

    When(/^I select any colour and size$/, function () {
        console.log('dhfgrgfgfd-----');
        return pdp.selectColourAndSize();
    });

    When(/^I add the product to the bag$/, function () {
        console.log('dhfgrgfgfd-----');
        return pdp.addToBag();
    });

    Then(/^I should go to 'My Bag' and assert bag quantity$/, function () {
        return client
        console.log('dhfgrgfgfd-----');
        return  pdp.checkMyBag();
    });

    Then(/^I click 'Proceed to checkout'$/, function () {
        console.log('dhfgrgfgfd-----');
        return cp.proceedToCheckout();
    });
    When(/^I should be on Registeration page$/, function () {

        return client 
        .useCss()
        .waitForElementVisible("body", 2000)
        //.expect.element("body[class=' uk checkout-onepage-index']").text.to.contain('Sign in / Create an account');
        .assert.containsText("body",'Shoeaholics');
    });
})
