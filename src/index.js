const { parseModel } = require("./model");
const { name } = require("./dataType/name");
const { guid } = require("./dataType/guid");
const { longtext } = require("./dataType/longtext");
const { currency } = require("./dataType/currency");
const { save } = require("./save");
const { createYargsTemplate } = require('./input');

const args = createYargsTemplate(require('yargs')).argv;


function main() {
  const model = parseModel(args.model);

  let result = [];

  for (let index = 0; index < args.number; index++) {
    let propResult = {};
    Object.keys(model).forEach(prop => {
      const { type, count, min, max, prefix } = model[prop];

      if (type === "GUID") {
        propResult = { ...propResult, [prop]: guid() };
      } else if (type === "name") {
        propResult = { ...propResult, [prop]: name(count) };
      } else if (type === "longtext") {
        propResult = { ...propResult, [prop]: longtext(count) };
      } else if (type === "currency") {
        propResult = { ...propResult, [prop]: currency(prefix, min, max) };
      }
    });
    result.push(propResult);
  }
  save(JSON.stringify(result, null, 2), args.output);
}
main();
