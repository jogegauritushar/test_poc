module.exports = {
	elements: {
		cardNumber: {selector: "div input[name='cardnumber']", locateStrategy: 'css'},
		expiryMth: {selector: "input[name='expirymonth']", locateStrategy: 'css'},
		expiryYr: {selector: "input[name='expiryyear']", locateStrategy: 'css'}

			},
	commands: [
	{
		cardDetails: function(){
			this
			.waitForElementVisible('@cardNumber', 2000)
			.setValue('@cardNumber', '')
			.waitForElementVisible('@expiryMth', 5000)
			.setValue('@expiryMth', '12')
			.waitForElementVisible('@expiryYr', 2000)
			.setValue('@expiryYr', '18')
			return this;

		},

	}]
};
