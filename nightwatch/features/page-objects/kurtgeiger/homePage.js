module.exports = {
	elements: {
		body: 'body',
		headerCategory: {selector: "//div[@class='inner-wrap']/ul/li[2]/a", locateStrategy: 'xpath'}
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