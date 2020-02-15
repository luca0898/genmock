const { parseParams, parseModel } = require("./model");
const { name } = require("./dataType/name");
const { guid } = require("./dataType/guid");
const { longtext } = require("./dataType/longtext");
const { currency } = require("./dataType/currency");
const { save } = require("./save");

function main() {
  const { modelFile, qtd, outFile } = parseParams();
  const model = parseModel(modelFile);

  let result = [];

  for (let index = 0; index < qtd; index++) {
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
  save(JSON.stringify(result, null, 2), outFile);
}
main();
