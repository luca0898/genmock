const faker = require("faker");

module.exports = function({ locale }) {
  if (locale) faker.locale = locale;

  return faker.name.findName();
};
