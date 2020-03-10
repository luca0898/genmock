const dataTypes = require("./dataType");

/**
 * Generates random mocked data based in a provided model
 *
 * @param {object} model - The JSON model to generate data
 * @param {number} number - The amount of data to generate. Default is 1
 * @returns {object[]} - The output data in the model format
 */
function generate({ model, number = 1 }) {
  let result = [];
  if (model)
    for (let index = 0; index < number; index++) {
      let propResult = {};
      Object.keys(model).forEach(prop => {
        const object = model[prop];

         if (object.type === "object") {
          propResult = {
            ...propResult,
            ...buildObject({ data: object.data, prop })
          };
        } else {
          propResult = {
            ...propResult,
            ...builder({ model: object, prop })
          };
        }
      });
      result.push(propResult);
    }

  return result;
}

/**
 * Build objects based on the quantity reported
 * @param {object} data - The object tamplate to generate data
 * @param {object} prop - Parameters of the property that will be created
 */
function buildObject({ data, prop }) {
  let customObject = {};
  Object.keys(data).forEach(el => {
    customObject = { ...customObject, ...builder({ model: data[el], prop: el }) };
  });
  return { [prop]: customObject };
}

/**
 * Builds property based on data type generators
 * @param {object} model - The object model to generate data
 * @param {object} prop - Parameters of the property that will be created
 */
function builder({ model, prop }) {
  const generator = dataTypes[String(model.type).toUpperCase()];
  if (typeof generator === "function") {
    return { [prop]: generator(model) };
  } else {
    throw `The data generator "${model.type}" could not be found`;
  }
}

module.exports = { generate, builder };
