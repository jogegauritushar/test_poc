module.exports = {
    elements: {
        title: {selector: "div.input-box select[id='prefix'] option[value='Ms']", locateStrategy: 'css'},
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
        userRegisteration: function(title, firstName, lastName, email, country, password, confirmPassword){
            return this
            
            //.waitForElementPresent('@title', 2000)
            //.click('@title', title)
            //.click('@title', title)
            .setValue('@firstName', 'Ana')
            .setValue('@lastName', Switch)
            //.setValue('@email', testtester@test.com)
            .setValue('@country', UK)
            .setValue('@password', password)
            .setValue('@confirmPassword', password);

        },

        continueShopping: function(){
            this.waitForElementVisible('@continueShoppingBtn', 2000)
            return this.click('@continueShoppingBtn');
        }

    }]
};