var page = require('./base_page');
var locator = require('../utils/locators');
var libraryItem = locator.libraryItem;
var libraryName = locator.nameInput;
var libraryAddress = locator.addressInput;
var libraryPhone = locator.phoneInput;
var createBtn = locator.createBtn;
var libraryContainer = locator.libraryContainer;
var inputFilter = locator.inputFilter;

//List libraries
page.prototype.listLibraries = function(){
  return this.findAll(libraryItem);
}

//Add library
page.prototype.addLibrary = function (desiredName) {
  var fakeLibraryName;
  if(desiredName){
    fakeLibraryName = desiredName;
  }else{
    fakeLibraryName = this.fake().libraryName;
  }
  var fakeLibraryAddress = this.fake().libraryAddress;
  var fakeLibraryPhone = this.fake().libraryPhone;
  this.findLink('Add new').click();
  this.write(libraryName, fakeLibraryName);
  this.write(libraryAddress, fakeLibraryAddress);
  this.write(libraryPhone, fakeLibraryPhone);
  this.find(createBtn).click();
  return {
    libraryList: this.find(libraryContainer).getText(),
    libraryName: fakeLibraryName
  }
};

//Filter libraries
page.prototype.filterLibraries = function () {
  var newLibrary = this.fake().libraryName;
  this.addLibrary(newLibrary);
  this.write(inputFilter, newLibrary);
  return {
    libraryList: this.find(libraryContainer).getText(),
    newLibrary: newLibrary
  }
};

module.exports = page;
