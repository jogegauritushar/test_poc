var {defineSupportCode} = require('cucumber');
const {client} = require('nightwatch-cucumber');

defineSupportCode(function ({Before, After}) {
    Before(function (scenario) {
        client
        .init()
        .setCookie({
        	name : "noWelcomePopup",
        	value : "12387",})
        client.init();

    });

    After(function (scenario) {
        return client.end();
    });
});
