const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {
    Given(/^I am on "([^"]*)"$/, (path) => {
        return client
            .url(client.launchUrl + path)
            .waitForElementVisible('body', 5000);
    });


    When(/^I click "([^"]*)"$/, (title) => {
        return client.click(`button[title="${title}"]`);
    });

    Then(/^I should see "([^"]*)"$/, (text) => {
        return client.assert.containsText('body', text);
    });

});
