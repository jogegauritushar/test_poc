module.exports = {
	elements: {
		body: 'body',
		headerCategory: {selector: "//div[@class='inner-wrap']/ul/li[2]/a", locateStrategy: 'xpath'},
		signInTab: {selector: '//div[@id="ss17-wrapLinksSearch"]/ul/li[7]/a', locateStrategy: 'xpath'},
		//menuList: {selector: "//div[@class='inner-wrap']/ul/li/a", locateStrategy: 'xpath'}
	},
	commands: [
	{
		chooseHeaderCategory: function(){
			 this
			.waitForElementVisible('@headerCategory', 1000)
			.click('@headerCategory')
			return this;
		},

		signIn: function(){
			this
			.waitForElementVisible('@signInTab', 2000)
			.click('@signInTab')
			return this;
	}
         /*menuListValidation: function() {
         	return this.api.elements('xpath', "//div[@class='inner-wrap']/ul/li/a").length
       
 			console.log(result.length);
 }*/
	}]
};