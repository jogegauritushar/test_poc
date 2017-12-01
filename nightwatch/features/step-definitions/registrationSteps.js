const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) =>
{
    
    let launchUrl = client.launch_url;
    let hp = null;
    let lap = null;
    let rp = null;
    
    if (launchUrl.search('shoeaholics') !== -1) {
        hp = client.page.shoeaholics.homePage();
        lap = client.page.shoeaholics.loginAccountPage();
        rp = client.page.shoeaholics.registrationPage();
    }

    if (launchUrl.search('kurtgeiger') !== -1) {
        hp = client.page.kurtgeiger.homePage();
        lap = client.page.kurtgeiger.loginAccountPage();
        rp = client.page.kurtgeiger.registrationPage();
        
    }
    
    When(/^I click 'Sigh In' tab$/, function () {
         return hp.signIn();               
   });


    When(/^I should be able on login account page$/, function () {
         //client.waitForElementVisible('login', 2000)
         return client.assert.urlContains('login');
    });


    When(/^I click on 'Register'$/, function () {
        return lap.register();
    });



    Then(/^I should be navigated to account registration page$/, function () {
        console.log('dhfgrgfgfd-----');
         //client.waitForElementVisible('create', 2000)
        return client.assert.urlContains('create');

    });

    Then(/^I enter all the required registration details$/, function () {
        return rp.userRegistration();
         
    });

    Then(/^I hit 'Submit'$/, function () {
        return rp.submit();

    });

    Then(/^I should be directed to 'My Account' section$/, function () {

        return client.assert.urlContains('account');
    });  

    Then(/^I 'Log out'$/, function () {  

    });    
    
});
