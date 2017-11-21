module.exports = {
    elements: {
        title: {selector: "div.input-box select[id='prefix']", locateStrategy: 'css'},
        titleValue: {selector: "div.input-box select[id='prefix'] option[value = 'Ms']", locateStrategy: 'css'},
        firstName: {selector: "input[id='firstname']", locateStrategy: 'css'},
        lastName: {selector: "input[id='lastname']", locateStrategy: 'css'},
        email: {selector: "input[id='email_address']", locateStrategy: 'css'},
        confirmEmail: {selector: "input[id='confirm_email_address']", locateStrategy: 'css'},
        country: {selector: "select[id='country']", locateStrategy: 'css'},
        mobile: {selector: "input[id='contact_number']", locateStrategy: 'css'}
        password: {selector: "input[id='password']", locateStrategy: 'css'},
        confirmPassword: {selector: "input[id='confirmation']", locateStrategy: 'css'},
        recaptcha: {selector: "div.recaptcha-checkbox-checkmark", locateStrategy: 'css'},
        registerMeButton: {selector: "button#btn-register", locateStrategy: 'css'}

        },
    commands: [
    {
        userRegisteration: function(){
            return this
            
            .waitForElementVisible('@title', 2000)
            .click('@title')
            .click('@titleValue', 'Ms')
            .setValue('@firstName', 'Ana')
            .setValue('@lastName', 'A')
            .setValue('@email', 'anaa@test.com')
            .setValue('@country', 'UK')
            .setValue('@mobile', '0123456789')
            .setValue('@password', 'password')
            .setValue('@confirmPassword', 'password')
            .waitForElementVisible('@recaptcha', 2000)
            .click('@recaptcha')
            .waitForElementVisible('@registerMeButton', 2000)
            .click('@registerMeButton');

        },

        continueShopping: function(){
            this.waitForElementVisible('@continueShoppingBtn', 2000)
            return this.click('@continueShoppingBtn');
        }

    }]
};