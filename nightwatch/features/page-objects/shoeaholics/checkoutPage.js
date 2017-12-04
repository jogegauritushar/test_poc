module.exports = {
	elements: {
		guestContinueTab: {selector: "div.buttons-set button[class='button alt-button']", locateStrategy: 'css'},
		title: {selector: "//div[@class='input-box']/select[@id='billing:prefix']/option[5]", locateStrategy: 'xpath'},
		firstName: {selector: "input[id='billing:firstname']", locateStrategy: 'css'},
        lastName: {selector: "input[id='billing:lastname']", locateStrategy: 'css'},
        email: {selector: "input[id='billing:email']", locateStrategy: 'css'},
        country: {selector: 'select[id="addressfinder:country"] option[value="GB"]', locateStrategy: 'css'},
        postcode: {selector: "input[id='addressfinder:billing']", locateStrategy: 'css'},
        addressLookupBtn: {selector: "button[id='addressfinderBillingButton']", locateStrategy: 'css'},
        addressSelectDropdown: {selector: "select[id='addressselect'] option[value='EC1M 5UA1004']", locateStrategy: 'css'},
        mobile: {selector: "input[id='billing:telephone']", locateStrategy: 'css'},
        continuePayBtn: {selector: "button#billing-buttons-container-continue", locateStrategy: 'css'},
        deliveryOption: {selector: "//div[@class='method-container']/span[text()='Standard Delivery']", locateStrategy: 'xpath'},
        continueBtn: {selector: "button#shipping-method-button", locateStrategy: 'css'},
        payByCardBtn: {selector: "label#p_method_sagepayserver_label", locateStrategy: 'css'}
	},
	
	commands: [
	{
		guestCheckout: function(){

			this
			 .waitForElementVisible('@guestContinueTab', 2000)
			 .click('@guestContinueTab')
			 return this;	
		},

		guestUserDetails: function(){

			var email = 'random-user' + new Date().getTime() + '@mailinator.com'

			this
			.waitForElementVisible('@title', 2000)
            .click('@title')
            .setValue('@firstName', 'xyz')
            .setValue('@lastName', 'abcd')
            .setValue('@email', email)
            .click('@country')
            .setValue('@postcode', 'EC1M 5UA')
            .waitForElementVisible('@addressLookupBtn', 3000)
            .click('@addressLookupBtn')
            .waitForElementVisible('@addressSelectDropdown', 3000)
            .click('@addressSelectDropdown')
            .setValue('@mobile', '435436758465')
            return this;
            
		},

		continuePayment: function(){

			 this
			 .waitForElementVisible('@continuePayBtn', 2000)
			 .click('@continuePayBtn')
			 .waitForElementVisible('@deliveryOption', 5000)
			 .click('@deliveryOption')
			 .waitForElementVisible('@continueBtn', 2000)
			 .click('@continueBtn')
			 return this;
		},

		payByCard: function(){
			this
			.waitForElementVisible('@payByCardBtn', 4000)
			.click('@payByCardBtn')
			return this;
		}


	}]
};