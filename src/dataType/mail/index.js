const faker = require("faker");

module.exports = function ({ firstName, lastName, provider, locale }) {
    if (locale) faker.locale = locale;

    return faker.internet.email(firstName, lastName, provider);
}