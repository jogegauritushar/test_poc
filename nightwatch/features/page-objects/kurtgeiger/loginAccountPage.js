module.exports = {
	elements: {
		loginButton: {selector: "div.buttons-set button[name]", locateStrategy: 'css'},
		registerButton: {selector: "div[class='buttons-set'] a span span", locateStrategy: 'css'}
		
		
	},
	commands: [

	{	
		register: function(){
			 this
			.waitForElementVisible('@registerButton', 1000)
			.click('@registerButton')
			return this;
		},
	}]
};