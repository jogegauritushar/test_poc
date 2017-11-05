const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {


    Given('I am on the {stringInDoubleQuotes} homepage', function (homepage){
        client.maximizeWindow();
        return client
            .waitForElementVisible('body', 1000)
            .assert.containsText('body', homepage);
    });

    Given(/^I am on PDP$/, function () {
        return client
            .useXpath()
            .click("//div[@class='top-nav-main']/ul/li[2]")
            .useCss()
            .click("div[id='product-list'] ul li:nth-child(1)");
    });

    Given(/^the welcome program is displayed$/, () => {
        return client
            .assert
            .visible('div[id="welcome_content"]');
    });

    Then('I should be able to close the welcome program', () => {
        return client
            .click("div[id='welcome_content'] a[id='welcome_close_link']")
            .pause(1000);
    });

    When(/^I select any colour and size$/, function () {
        return client
            .useXpath()
            .waitForElementVisible("//div[@class='options-container clearfix']/ul[@id='colours']/li[1]", 1000)
            .click("//div[@class='options-container clearfix']/ul[@id='colours']/li[1]")
            .waitForElementVisible('//div[@id="size-container"]/ul/li[not(contains(@class,"no-stock"))]', 1000)
            .click('//div[@id="size-container"]/ul/li[not(contains(@class,"no-stock"))]');
    });

    When(/^I add the product to the bag$/, function () {
        return client
            .useCss()
            .click("div[class='add-to-cart'] button");
    });

    Then(/^I should go to 'My Bag' and assert bag quantity$/, function () {
        return client
        //.expect.element("div[class='page-title'] h1").to.have.value.which.contains('1 item')
            .waitForElementVisible("div[class='button-wrap clearfix button-wrap--dbl-btns'] a[id='go-to-cart-ss17']", 2000)
            .click("div[class='button-wrap clearfix button-wrap--dbl-btns'] a[id='go-to-cart-ss17']")

    });

    Then(/^I click 'Proceed to checkout'$/, function () {
        return client
            .waitForElementVisible("button[id='btn-proceed-checkout']", 1000)
            .click("button[id='btn-proceed-checkout']")

    });
});
