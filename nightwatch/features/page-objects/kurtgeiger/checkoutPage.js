module.exports = {
	elements: {
		guestEmailTab: {selector: "input[id='register-guest:email']", locateStrategy: 'css'},
		checkoutGuestBtn: {selector: 'div.col-2 form div button span span', locateStrategy: 'css'},
		title: {selector: "//div[@class='input-box']/select[@id='shipping:prefix']/option[5]", locateStrategy: 'xpath'},
		firstName: {selector: "input[id='shipping:firstname']", locateStrategy: 'css'},
        lastName: {selector: "input[id='shipping:lastname']", locateStrategy: 'css'},
        mobile: {selector: "input[id='shipping:telephone']", locateStrategy: 'css'},
        country: {selector: "select[id='country']", locateStrategy: 'css'},
        postcode: {selector: "input[id='addressfinder:shipping']", locateStrategy: 'css'},
        addressLookupBtn: {selector: "button[id='addressfinderShippingButton']", locateStrategy: 'css'},
        addressSelectDropdown: {selector: "select[id='addressselect'] option[value='EC1M 5UA1004']", locateStrategy: 'css'}, 
        continuePayBtn: {selector: "button[title='Continue to Payment'] span span", locateStrategy: 'css'}
	},
	
	commands: [
	{
		guestCheckout: function(){

			var email = 'random-user' + new Date().getTime() + '@mailinator.com'

			 this
			 .waitForElementPresent('@guestEmailTab', 2000)
			 .setValue('@guestEmailTab', email)
			 .waitForElementVisible('@checkoutGuestBtn', 2000)
			 .click('@checkoutGuestBtn')
			 return this;
		},

		guestUserDetails: function(){

			this
			.waitForElementVisible('@title', 2000)
            .click('@title')
            .setValue('@firstName', 'xyz')
            .setValue('@lastName', 'abcd')
            .setValue('@mobile', '123456789')   
            //.click('@country')
            .setValue('@postcode', 'EC1M 5UA')
            .click('@addressLookupBtn')
            .waitForElementVisible('@addressSelectDropdown', 2000)
            .click('@addressSelectDropdown')
            return this;
		},

		continuePayment: function(){

			 this.waitForElementVisible('@continuePayBtn', 2000)
				 .click('@continuePayBtn');
				 return this;
		}

	}]
};