const fs = require("fs");

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

module.exports = { save: saveToFile };
