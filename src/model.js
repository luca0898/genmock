const path = require('path');
const { tryParseInt, checkIfExists } = require("./utils");

/**
 * Parses the default parameters
 *
 * Expected index 0 to be the input model file path
 * Expected index 1 to be the number of data to generate
 * Expected index 2 to be the output file path
 *
 * @param {string[]} argv - The input parameters array. Default is ``process.argv``
 * @returns {{qtd: number, modelFile: string, outFile: string}}
 */
function parseParams(argv = process.argv) {
  const [ modelFile, qtd, outFile ] = argv.slice(2);
  return {
    qtd: tryParseInt(qtd, 1),
    modelFile: path.resolve(modelFile || ''),
    outFile: path.resolve(outFile || '')
  };
}

/**
 * Reads the input model file and parses into an object
 *
 * @param {string} modelFile - The JSON input file path
 * @returns {object} - The data model object
 * @throws If the provided file doesn't exists
 */
function parseModel(modelFile= parseParams().modelFile) {
  if (checkIfExists(modelFile)) {
    return require(modelFile)
  } else throw `File ${modelFile} does not exists`
}

module.exports = { parseModel, parseParams };
