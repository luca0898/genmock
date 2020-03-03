const LoremIpsum = require("lorem-ipsum").LoremIpsum;

module.exports = function({ count }) {
  return new LoremIpsum().generateWords(count);
};
