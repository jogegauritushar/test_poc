const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {

    let launchUrl = client.launch_url;
    let hp = null;
    let plp = null;
    let pdp = null;
    let cp = null;
    let chp = null;
    let cpp = null;

    if (launchUrl.search('shoeaholics') !== -1) {
        hp = client.page.shoeaholics.homePage();
        plp = client.page.shoeaholics.plpPage();
        pdp = client.page.shoeaholics.pdpPage();
        cp = client.page.shoeaholics.cartPage();
        chp = client.page.shoeaholics.checkoutPage();
        cpp = client.page.shoeaholics.cardPaymentPage();

    }

    if (launchUrl.search('kurtgeiger') !== -1) {
        hp = client.page.kurtgeiger.homePage();
        plp = client.page.kurtgeiger.plpPage();
        pdp = client.page.kurtgeiger.pdpPage();
        cp = client.page.kurtgeiger.cartPage();
        chp = client.page.kurtgeiger.checkoutPage();
        cpp = client.page.kurtgeiger.cardPaymentPage();
    }


    Then(/^I select to pay by card$/, function () {
         return chp.payByCard()
         
    });

    Then(/^I enter valid (.*)$/, function (card) {

            client
                .pause(4000)
             .frame("sagepaysuite-server-incheckout-iframe");
              return cpp.cardDetails(card);
    });

    Then(/^I provide the 3D secure password$/, function () {
         return cpp.securityCheck();

    });
    Then(/^I click 'Submit'$/, function () {
        client.pause(2000);
        return cpp.submit()

    });
    Then('Order Confirmation message appears on screen', function () {
        client.pause(10000);
        //client.assert.containsText('#body', "Order Confirmation")
        // var SIGNATURE = The order number is; // this method is defined elsewhere
        // client.getValue('div.order-number h4', function(result){
        //     require("assert").equal(result.value, SIGNATURE, "Verify signature set");
        // });
        client.getText('div.order-number h4',function(result){
            console.log('Order Confirmation number is'+ result.value);
        });
    });
    Then(/^I enter invalid (.*)$/, function (card) {

        client
            .pause(4000)
            .frame("sagepaysuite-server-incheckout-iframe");
        return cpp.cardDetails(card);
    });


});
