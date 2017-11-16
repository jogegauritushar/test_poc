module.exports = {
	elements: {
		colour: {selector: "//div[@class='options-container clearfix']/ul[@id='colours']/li[1]", locateStrategy: 'xpath'},
		//div[@class='options-container clearfix']/ul[@id='colours']/li[1]
		size: {selector: '//div[@id="size-container"]/ul/li[not(contains(@class,"no-stock"))]', locateStrategy: 'xpath'},
		bag: {selector: "div button[id='add-to-cart']", locateStrategy: 'css'},
		myBag: {selector: "div[id='bag-parent'] div[class$='top-bag']", locateStrategy: 'css'}

	},
	commands: [
	{
		selectColourAndSize: function(){
			this
			.waitForElementVisible('@colour', 2000)
			.click('@colour')
			.waitForElementVisible('@size', 2000)
			return this.click('@size');
		},
		addToBag: function(){
			this.waitForElementVisible('@bag', 2000)
			return this.click('@bag');
		},

		checkMyBag: function(){
			this.waitForElementVisible('@myBag', 2000)
			return this.click('@myBag');
		}

	}]
};
