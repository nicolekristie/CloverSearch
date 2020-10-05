const { Given, When, Then } = require('cucumber');
const searchValue = "POS System & Credit Card Readers by Clover";

var myStepDefinitionsWrapper = function () {

    Given(/^User visits google$/, function () {
        console.log("testing");
        browser.url("https://www.google.com");
    });
};


var myStepDefinitionsWrapper = function () {

    When(/^User searches for term "([^"]*)"$/, function (searchVal) {
        browser.$('#hplogo').waitForExist();
        browser.$('.gLFyf.gsfi').setValue(searchVal);
        browser.keys('Enter');
    });
};


Then(/^User will see expected first item in list of results$/,() => {
    const elem = browser.$('.LC20lb.DKV0Md');
    const value = elem.getText();
});

