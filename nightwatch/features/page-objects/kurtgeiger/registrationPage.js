

module.exports = {

    elements: {
        title: {selector: "//div[@class='input-box']/select[@id='prefix']/option[5]", locateStrategy: 'xpath'},
        firstName: {selector: "input[id='firstname']", locateStrategy: 'css'},
        lastName: {selector: "input[id='lastname']", locateStrategy: 'css'},
        email: {selector: "input[id='email_address']", locateStrategy: 'css'},
        country: {selector: "select[id='country']", locateStrategy: 'css'},
        password: {selector: "input[id='password']", locateStrategy: 'css'},
        confirmPassword: {selector: "input[id='confirmation']", locateStrategy: 'css'},
        submitButton: {selector: "button[title='Submit']", locateStrategy: 'css'}

        },
    commands: [
    {
        userRegistration: function(){
            var email = 'random-user' + new Date().getTime() + '@mailinator.com'
            
            this
            .waitForElementPresent('@title', 2000)
            .click('@title')
            .setValue('@firstName', 'Ana')
            .setValue('@lastName', 'A')
            .setValue('@email',email)
            .click('@country')
            .setValue('@password', 'password')
            .setValue('@confirmPassword', 'password')
            return this;
        },

        submit: function(){
             this
             .waitForElementVisible('@submitButton', 2000)
             .click('@submitButton')
             return this;

        },

        continueShopping: function(){
            this
            .waitForElementVisible('@continueShoppingBtn', 2000)
            .click('@continueShoppingBtn')
            return this;
        }

    }]
};