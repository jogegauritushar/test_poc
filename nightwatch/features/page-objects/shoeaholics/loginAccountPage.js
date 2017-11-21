module.exports = {
	elements: {
		loginButton: {selector: "button#send2", locateStrategy: 'css'},
		registerButton: {selector: "div.registration-form button", locateStrategy: 'css'}
		
		
	},
	commands: [

	{	
		register: function(){
			 return this
			.waitForElementVisible('@registerButton', 2000)
			.click('@registerButton');
		},
	}]
};