const LoremIpsum = require("lorem-ipsum").LoremIpsum;

function name(options) {
  const { count } = options;
  const lorem = new LoremIpsum({ count });

  let firstName = lorem.generateWords(1);
  let lastName = lorem.generateWords(1);

  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

  return `${firstName} ${lastName}`;
}

module.exports = { name };
