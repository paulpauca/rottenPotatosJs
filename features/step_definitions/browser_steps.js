var seleniumWebdriver = require('selenium-webdriver');
var cucumber = require('cucumber');

cucumber.defineSupportCode(function({Given, When, Then}) {
  Given('I am on Chrome', function(callback) {
    this.driver.get();
    callback(0, 'done');
  });

  Given('I am on {arg1:stringInDoubleQuotes}', function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    this.driver.get(arg1, function(){
      var currentUrl = this.driver.getCurrentUrl();
      console.log(currentUrl)
      if(currentUrl == arg1) {
          callback(null, 'done');
      }
      else {
        callback('error', null);
      }
    });
  });

  When('I enter {arg1:stringInDoubleQuotes}', function (text) {
    return this.driver.get(text);
    //return this.driver.findElement({linkText: text}).then(function(element) {
    //  return element.click();
    //});
  });

  When('I enter {arg1:stringInDoubleQuotes} as title', function (arg1, callback) {
           // Write code here that turns the phrase above into concrete actions
           callback(null, 'pending');
         });

  Then('I should see {stringInDoubleQuotes}', function (text) {
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition, 10000);
  });
});
