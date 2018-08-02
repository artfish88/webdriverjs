var Page = require('./base_page');
var locator = require('../utils/locators');
var emailInput = locator.emailInput;
var requestBtn = locator.requestBtn;
var alertSuccess = locator.alertSuccess;

Page.prototype.requestBtn = function(){
  this.write(emailInput, this.fake().email);
  return{
    opacity: this.find(requestBtn).getCssValue('opacity'),
    state: this.find(requestBtn).isEnabled()
  }
}

Page.prototype.clickSubmit = function(){
  return this.find(requestBtn).click();
}

Page.prototype.alertSuccess = function(){
  this.requestBtn();
  this.clickSubmit();
  return this.find(alertSuccess).getText();
}

module.exports = Page;
