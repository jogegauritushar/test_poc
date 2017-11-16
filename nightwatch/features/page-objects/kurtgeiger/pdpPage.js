module.exports = {
	elements: {
		colour: {selector: "div#product-options ul#colours li:nth-child(1)", locateStrategy: 'css'},
		size: {selector: '//div[@id="product-options"]/ul[contains(@class, "sizes")][not(contains(@class, "hidden"))]/li[not(contains(@class,"no-stock"))]', locateStrategy: 'xpath'},
		bag: {selector: "div[class='add-to-cart'] button", locateStrategy: 'css'},
		myBag: {selector: "div[class='button-wrap clearfix button-wrap--dbl-btns'] a[id='go-to-cart-ss17']", locateStrategy: 'css'}

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
