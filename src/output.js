const fs = require("fs");

/**
 * Finds the right output function to output the data.
 *
 * Empty ``outFile`` means that the data should be outputted to stdout
 *
 * @param {string | undefined} outFile - The path to the file to write the data
 * @returns {(function(data): void)}
 */
function createOutputFunction(outFile) {
  if (outFile) {
    return result => saveToFile(result, outFile)
  } else {
    return writeToStdout
  }
}

/**
 * Writes the data into a file
 *
 * @param {string} result - The data to write
 * @param {string} outFile - The file to write into. Default is ``output.json``
 */
function saveToFile(result, outFile = 'output.json') {
  fs.writeFile(outFile, result, "utf8", function(err) {
    if (err) {
      console.error("An error occurred while writing JSON Object to File.", err);
    }
  });
}

const writeToStdout = console.log;

module.exports = { save: saveToFile, createOutputFunction };
