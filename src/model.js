const { checkIfExists } = require("./utils");

/**
 * Reads the input model file and parses into an object
 *
 * @param {string} modelFile - The JSON input file path
 * @returns {object} - The data model object
 * @throws If the provided file doesn't exists
 */
function parseModel(modelFile) {
  if (checkIfExists(modelFile)) {
    return require(modelFile)
  } else throw `File ${modelFile} does not exists`
}

module.exports = { parseModel };
