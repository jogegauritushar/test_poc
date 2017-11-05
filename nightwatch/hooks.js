var {defineSupportCode} = require('cucumber');
const {client} = require('nightwatch-cucumber');

defineSupportCode(function ({Before, After}) {
    Before(function (scenario) {
        return client.init()
        //client.manage().addCookie("noWelcomePopup", "12387");
    });

    // After(function (scenario) {
    //     return client.end();
    // });
});
