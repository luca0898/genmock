const fs = require("fs");
const { tryParseInt, checkIfExists } = require("./utils");

function getModelAndParameters() {
  const { argv } = process;
  const [filePath, qtd, outputFormat] = argv.slice(2, argv.length);

  if (checkIfExists(filePath)) {
    const lines = fs.readFileSync(filePath, { encoding: "utf-8" });

    return {
      model: JSON.parse(lines),
      parameters: {
        outputFormat,
        qtd: tryParseInt(qtd, 10)
      }
    };
  } else {
    throw "File not exists";
  }
}

module.exports = { getModelAndParameters };
