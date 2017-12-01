module.exports = {
	elements: {
		body: 'body',
		headerCategory: {selector: "//div[@class='top-nav-main']/ul/li[2]", locateStrategy: 'xpath'},
		signInTab: {selector: '//ul[@id="quick-access"]/li[1]/a', locateStrategy: 'xpath'}
	},
	commands: [
	{
		chooseHeaderCategory: function(){
		   this
			.waitForElementVisible('@headerCategory', 2000)
			.click('@headerCategory')
			return this;
		},

		signIn: function(){
			this
			.waitForElementVisible('@signInTab', 2000)
			.click('@signInTab')
			return this;

	},
	
	}]
};