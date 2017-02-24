var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('I am on Chrome', function() {
    //return this.driver.get('');
  });

  When('I type {arg1:stringInDoubleQuotes}', function (text) {
    return this.driver.get('http://rottenpotatoswfu.herokuapp.com');
    //return this.driver.findElement({linkText: text}).then(function(element) {
    //  return element.click();
    //});
  });

  Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 5000);
  });
});
