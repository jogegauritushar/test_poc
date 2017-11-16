module.exports = {
	elements: {
		checkoutButton: {selector: "//div[@class='actions']/a[2]", locateStrategy: 'xpath'},
			},
	commands: [
	{
		proceedToCheckout: function(){
			this
			.waitForElementVisible('@checkoutButton', 2000)
			.click('@checkoutButton')

		},

	}]
};
