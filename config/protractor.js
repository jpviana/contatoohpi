<<<<<<< HEAD
var config = require('./config')();

exports.config = {
	sauceUser : config.sauceUser,
	sauceKey : config.sauceKey,
	capabilities : {
	'name': config.sauceTestName,
	'browserName': 'chrome',
	'tunnel-identifier': config.travisJobNumber,
	'build': config.travisBuild
},

specs: ['../test/e2e/**/*Spec.js'],

exports.config = {
=======
exports.config = {
	specs:['../test/e2e/**/*.js'],
>>>>>>> f78d4d92f5ace4b702c691c5508677cf181f9a26
	onPrepare:function() {
		browser.driver.get('http://localhost:3000');
		browser.sleep(500);
		browser.driver.findElement(by.id('entrar')).click();
		browser.sleep(500);
<<<<<<< HEAD
		browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUser);
		browser.driver.findElement(by.id('password')).sendKeys(config.seleniumUserPassword);
=======
		browser.driver.findElement(by.id('login_field')).sendKeys('jpviana');
		browser.driver.findElement(by.id('password')).sendKeys('joao110591');
>>>>>>> f78d4d92f5ace4b702c691c5508677cf181f9a26
		browser.driver.findElement(by.name('commit')).click();
		browser.sleep(500);
	}
};