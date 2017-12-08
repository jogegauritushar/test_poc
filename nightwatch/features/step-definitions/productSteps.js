const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When, Before, After}) => {

    let launchUrl = client.launch_url;
    let hp = null;

    if (launchUrl.search('shoeaholics') !== -1) {
        hp = client.page.shoeaholics.homePage();
    }

    if (launchUrl.search('kurtgeiger') !== -1) {
        hp = client.page.kurtgeiger.homePage();
    }

    When(/^I search for a random (.*)$/, function (item) {
        client.pause(2000);
        return hp.searchField(item)

    });
    Then(/^the product listing page should display a list of products$/, function () {

        var itemName = hp.searchField();
        console.log("The text is :"+itemName);

        /*client.assert.containsText('body', text);
        console.log(text)*/
    });

});
