/*
*	Configures the Ghost server to sneak in extra variables
*
*	During server startup in index.js:
*		`app.config.theme.<your_var_here> = "<your_value_here>";
*	
*	In your theme:
*		`<h1>{{ @blog.<your_var_here> }}</h1>`
*/

module.exports = function(app) {
	app.config.theme.testie = "derp";
};