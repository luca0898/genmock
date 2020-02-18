const dataTypes = require('./dataType');
const output = require("./output");
const { createYargsTemplate, createInputFunction } = require('./input');

const args = createYargsTemplate(require('yargs')).argv;

/**
 * Generates random mocked data based in a provided model
 *
 * @param {object} model - The JSON model to generate data
 * @param {number} number - The amount of data to generate. Default is 1
 * @returns {object[]} - The output data in the model format
 */
function generate({ model, number = 1 }) {
  let result = [];

  for (let index = 0; index < number; index++) {
    let propResult = {};
    Object.keys(model).forEach(prop => {
      const { type } = model[prop];
      const generator = typeof type === 'function' ? type : dataTypes[String(type).toUpperCase()];

      if (generator) {
        propResult = { ...propResult, [prop]: generator(model[prop]) };
      } else {
        console.warn(`The data generator ${type} could not be found`)
      }
    });

    result.push(propResult);
  }

  return result;
}

function main() {
  const model = createInputFunction(args.model)();
  const result = generate({ ...args, model });
  output(args.output)(JSON.stringify(result, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = generate;
