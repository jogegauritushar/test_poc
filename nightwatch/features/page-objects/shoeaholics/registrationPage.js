
module.exports = {
    elements: {
        title: {selector: "//div[@class='input-box']/select[@id='prefix']/option[5]", locateStrategy: 'xpath'},
        firstName: {selector: "input[id='firstname']", locateStrategy: 'css'},
        lastName: {selector: "input[id='lastname']", locateStrategy: 'css'},
        email: {selector: "input[id='email_address']", locateStrategy: 'css'},
        confirmEmail: {selector: "input[id='confirm_email_address']", locateStrategy: 'css'},
        country: {selector: "//select[@id='country']/optgroup[1]/option[2]", locateStrategy: 'xpath'},
        mobile: {selector: "input[id='contact_number']", locateStrategy: 'css'},
        password: {selector: "input[id='password']", locateStrategy: 'css'},
        confirmPassword: {selector: "input[id='confirmation']", locateStrategy: 'css'},
        registerMeButton: {selector: "button#btn-register", locateStrategy: 'css'}

        },
    commands: [
        {
            userRegistration: function(){

                var email = 'random-user' + new Date().getTime() + '@mailinator.com'
                
                this
                 .waitForElementVisible('@title', 2000)
                 .click('@title')
                 .setValue('@firstName', 'xyz')
                 .setValue('@lastName', 'abcd')
                 .setValue('@email', email)
                 .setValue('@confirmEmail', email)
                 .click('@country')
                 .setValue('@mobile', '1283847575')
                 .setValue('@password', 'password')
                 .setValue('@confirmPassword', 'password')
                 return this;
            },

            submit: function(){
                this
                 .waitForElementVisible('@registerMeButton', 2000)
                 .click('@registerMeButton')
                 return this;
            }
        }]
};