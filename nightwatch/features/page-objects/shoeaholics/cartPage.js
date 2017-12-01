module.exports = {
	elements: {
		checkoutButton: {selector: "//div[@class='actions']/a[2]", locateStrategy: 'xpath'},
			},
	commands: [
	{
		proceedToCheckout: function(){
			this
			.waitForElementVisible('@checkoutButton', 4000)
			.click('@checkoutButton')
			return this;

		},

	}]
};
