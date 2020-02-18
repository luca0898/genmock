const dataTypes = require('./dataType');
const output = require("./output");
const { createYargsTemplate, createInputFunction } = require('./input');

const args = createYargsTemplate(require('yargs')).argv;

function main() {
  const model = createInputFunction(args.model)();

  let result = [];

  for (let index = 0; index < args.number; index++) {
    let propResult = {};
    Object.keys(model).forEach(prop => {
      const { type } = model[prop];
      const dataGenerator = dataTypes[Object.keys(dataTypes).find(it => it === type.toUpperCase())];
      propResult = { ...propResult, [prop]: dataGenerator(model[prop]) };
    });
    result.push(propResult);
  }
  output(args.output)(JSON.stringify(result, null, 2));
}
main();
