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
				.waitForElementVisible('@colour', 4000)
				.click('@colour')
				.waitForElementVisible('@size', 2000)
                .click('@size');

				return this;
            // if(this.waitForElementVisible('@size', 2000)){
            //     this.click('@size');
            // }
            // else if(this.waitForElementNotVisible('@size', 2000)){
            //     console.log('sgfhvds ghdffghe')
            // }else
            //     return this;
		},
		addToBag: function(){
			this
			.waitForElementVisible('@bag', 2000)
			.click('@bag');
			return this;
		},

		checkMyBag: function(){
			this
			.waitForElementVisible('@myBag', 2000)
			.click('@myBag');
			return this;

		}

	}]
};
