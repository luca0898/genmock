const LoremIpsum = require("lorem-ipsum").LoremIpsum;

function longtext(count) {
  return new LoremIpsum().generateWords(count);
}

module.exports = { longtext };
