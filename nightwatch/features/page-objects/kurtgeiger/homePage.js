module.exports = {
	elements: {
		body: 'body',
		headerCategory: {selector: "//div[@class='inner-wrap']/ul/li[3]/a", locateStrategy: 'xpath'},
		signInTab: {selector: '//div[@id="ss17-wrapLinksSearch"]/ul/li[7]/a', locateStrategy: 'xpath'},
		searchBox: {selector: "input#searchbox", locateStrategy: 'css'},
		searchButton: {selector: "div.input-box a.header_search--button", locateStrategy: 'css'},
		selectItem: {selector: "div.search-inner ul li:nth-child(2)", locateStrategy: 'css'}

		//menuList: {selector: "//div[@class='inner-wrap']/ul/li/a", locateStrategy: 'xpath'}
	},
	commands: [
	{
		chooseHeaderCategory: function(){
			 this
			.waitForElementVisible('@headerCategory', 1000)
			.click('@headerCategory');
			return this;
		},

		signIn: function(){
			this
			.waitForElementVisible('@signInTab', 2000)
			.click('@signInTab');
			return this;

	},
		searchField: function(item){
			this
				.waitForElementVisible('@searchBox', 2000)
				.setValue('@searchBox', item)
				.waitForElementVisible('@searchButton', 2000)
				.click('@searchButton')
				.waitForElementVisible('@selectItem', 2000)
			//});
			this.click('@selectItem');
                /*this.getText('@selectItem', function (present) {
                    if (present.status !== -1) {
                        this.getText('@selectItem', function (result) {
                            if (result.status !== -1) {
                                console.log('text: ' + result.text);
                            }
                        });
                    }
                });*/
			return this;
		}, 
		/*selectProductFromList: function () {
			this.getText("div.search-inner ul li");
            return this;
        },*/
        // selectProduct: function(productName) {
        //     return this.click("@selectItem" + productName + "']");
        // }

	}]
};