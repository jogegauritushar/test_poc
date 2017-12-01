module.exports = {
	elements: {
		checkoutButton: {selector: "div[class^='buttons-set'] ul button[id^='btn-proceed']", locateStrategy: 'css'},
		continueShoppingBtn: {selector: 'div.continue-shopping button', locateStrategy: 'css'},
			},
	commands: [
	{
		proceedToCheckout: function(){
			this
			.waitForElementVisible('@checkoutButton', 2000)
			.click('@checkoutButton')
			return this;

		},

		continueShopping: function(){
			this
			.waitForElementVisible('@continueShoppingBtn', 2000)
			.click('@continueShoppingBtn')
			return this;
		},

	}]
};
