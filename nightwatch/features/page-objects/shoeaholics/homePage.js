module.exports = {
    elements: {
        body: 'body',
        headerCategory: {selector: "//div[@class='top-nav-main']/ul/li[1]", locateStrategy: 'xpath'},
        signInTab: {selector: '//ul[@id="quick-access"]/li[1]/a', locateStrategy: 'xpath'},
        searchTab: {selector: "div[class$='top-search']", locateStrategy: 'css'},
        searchBox: {selector: "div[class^='searchbox'] input#searchbox", locateStrategy: 'css'},
        productSuggestions: {selector: "//ul[@id='suggestion']/li/a", locateStrategy: 'xpath'}
        // productSuggestions: {selector: "div[class^='top-menu-child'] div[class^='search-left'] ul li", locateStrategy: 'css'}
    },
    commands: [
        {
            chooseHeaderCategory: function () {
                this
                    .waitForElementVisible('@headerCategory', 2000)
                    .click('@headerCategory');
                return this;
            },

            signIn: function () {
                this
                    .waitForElementVisible('@signInTab', 2000)
                    .click('@signInTab');
                return this;

            },

            searchField: function (client, item) {


                client
                    .waitForElementVisible('@searchTab', 2000)
                    .click('@searchTab')
                    .waitForElementVisible('@searchBox', 2000)
                    .setValue('@searchBox', item)
                    // .waitForElementVisible('@productSuggestions', 2000);

                    .elements("//ul[@id='suggestion']/li/a", function (result) {
                        console.log("Now inside");
                        console.log(result.value.length);
                    });
                console.log("after searching");


                // .getText('@productSuggestions', function(result){
                // 	productName = result.value;
                // 	return productName;
                // 	/*return result.value
                //     this.assert.equal(result.status, 0);
                //     console.log(result)*/
                // });
                // this.click('@productSuggestions');

                return client;


            }

        }]
};