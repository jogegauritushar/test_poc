module.exports = {
	elements: {
		body: 'body',
		headerCategory: {selector: "//div[@class='top-nav-main']/ul/li[2]", locateStrategy: 'xpath'}
	},
	commands: [
	{
		chooseHeaderCategory: function(){
			 return this
			.waitForElementVisible('@headerCategory', 2000)
			.click('@headerCategory');
		},
	}]
};