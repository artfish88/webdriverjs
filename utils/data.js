var faker = require('faker');

var fake = function() {
  return {
    email: faker.internet.email(),
    libraryName: 'Varna ' + faker.address.city() + ' Library',
    libraryAddress: faker.address.streetAddress(),
    libraryPhone: faker.phone.phoneNumber()
  };
};

module.exports = fake;
