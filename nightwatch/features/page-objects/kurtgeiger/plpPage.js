module.exports = {
	elements: {
		body: 'body',
		product: {selector: "div[id='product-list'] ul li:nth-child(2) a", locateStrategy: 'css'}
	},
	commands: [
	{
		selectProduct: function(){
			this
			.waitForElementVisible('@product', 2000)
			.click('@product');
			return this;
		},
	}]
};