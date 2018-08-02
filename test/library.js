var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../lib/home_page');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var should = chai.should();
var page;
chai.use(chaiAsPromised);

describe('library app scenarios', function(){
  this.timeout(50000);

  beforeEach(function(){
    page = new Page();
    page.visit('http://library-app.firebaseapp.com');
  });

  afterEach(function(){
    page.quit();
  });

  it('typing a valid email changes the button opacity', function(){
    var btn = page.requestBtn();
    btn.opacity.should.eventually.equal('1');
  });

  it('typing a valid email enables request btn', function(){
    var btn = page.requestBtn();
    btn.state.should.eventually.be.true;
  });

  it('clicking request btn triggers confirmation alert', function(){
    var alert = page.alertSuccess();
    alert.should.eventually.contain('Thank you!');
  });
})
