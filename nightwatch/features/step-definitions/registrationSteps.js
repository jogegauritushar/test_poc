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
        rp = client.page.shoeaholics.registrationPage();
        
    }
    
    When(/^I click 'Sigh In' tab$/, function () {
         console.log('dhfgrgfgfd-----');
         client.pause(1000);
        return hp.signIn();               
   });


    When(/^I should be able on login account page$/, function () {
        console.log('dhfgrgfgfd-----');
        return client.assert.urlContains('login');
    });


    When(/^I click on 'Register'$/, function () {
        console.log('dhfgrgfgfd-----');
        return lap.register();
    });


    Then(/^I should be navigated to account registeration page$/, function () {
        console.log('dhfgrgfgfd-----');
        return client.assert.containsText('create');

    });

    Then(/^I enter all the required registration details$/, function () {
        console.log('dhfgrgfgfd-----');
         rp.userRegisteration();
         return client.pause(2000);
    });

    Then(/^I hit 'Submit'$/, function () {

    });

    Then(/^I should be directed to 'My Account' section$/, function () {

    });    
    
});
