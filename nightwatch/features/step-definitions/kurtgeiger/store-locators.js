const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {
    Then(/^I enter my postcode$/, () => {
        return client
            .waitForElementVisible('#address', 10000)
            .setValue('#address', 'EC1M 5UA')
    });

    When(/^I click Search for stores$/, () => {
        return client
            .click('#storelocator-search-submit')
            .waitForElementVisible('#store-locator-results', 10000)
    })
});