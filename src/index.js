const { getModelAndParameters } = require("./model");
const dataTypes = require('./dataType');
const { save } = require("./save");

function main() {
  const { model, parameters } = getModelAndParameters();

  let result = [];

  for (let index = 0; index < parameters.qtd; index++) {
    let propResult = {};
    Object.keys(model).forEach(prop => {
      const { type } = model[prop];
      const dataGenerator = dataTypes[Object.keys(dataTypes).find(it => it === type.toUpperCase())];
      propResult = { ...propResult, [prop]: dataGenerator(model[prop]) };
    });
    result.push(propResult);
  }
  save(JSON.stringify(result, null, 2));
}
main();
