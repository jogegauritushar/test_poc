module.exports = {
	elements: {
		body: 'body',
		product: {selector: "div[id='product-list'] ul li:nth-child(1)", locateStrategy: 'css'}
	},
	commands: [
	{
		selectProduct: function(){
			 return this
			.waitForElementVisible('@product', 2000)
			.click('@product');
		},
	}]
};