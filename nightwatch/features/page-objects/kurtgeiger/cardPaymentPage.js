
module.exports = {

    elements: {
        frameName: {selector: "sagepaysuite-server-incheckout-iframe", locateStrategy: 'css'},
        cardNumber: {selector: "input[name='cardnumber']", locateStrategy: 'css'},
        expiryMth: {selector: "input[name='expirymonth']", locateStrategy: 'css'},
        expiryYr: {selector: "input[name='expiryyear']", locateStrategy: 'css'},
        cvcCode: {selector: "input[name='securitycode']", locateStrategy: 'css'},
        confirmCardDetails: {selector: "div.text-align--right button", locateStrategy: 'css'},
        threeDSecure: {selector: "input[name='password']", locateStrategy: 'css'},
        submitBtn: {selector: "button[class^='btn btn--positive']", locateStrategy: 'css'}

    },
    commands: [

        {
            cardDetails: function(card){

                this
                    .waitForElementVisible('@cardNumber', 4000)
                    .setValue('@cardNumber', card)
                    .waitForElementVisible('@expiryMth', 2000)
                    .setValue('@expiryMth', '12')
                    .waitForElementVisible('@expiryYr', 2000)
                    .setValue('@expiryYr', '18')
                    .waitForElementVisible('@cvcCode', 2000)
                    .setValue('@cvcCode', '123');
                    /*.waitForElementVisible('@confirmCardDetails', 2000)
                    .click('@confirmCardDetails');*/
                     //.api.frame(null);
                return this;
            },
            /*securityCheck: function () {
                this
                    .waitForElementVisible('@threeDSecure', 2000)
                    .setValue('@threeDSecure', 'password');
                return this;
            },*/

            submit: function () {
                this
                    .waitForElementVisible('@submitBtn', 5000)
                    .click('@submitBtn');
                return this;
            },

        }]
};
