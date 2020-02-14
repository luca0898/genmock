function tryParseInt(value, defaultValue) {
  return /^\d+$/.test(value) === true ? parseInt(value) : defaultValue;
}

function checkIfExists(path) {
  return !!require("fs").existsSync(path);
}
module.exports = { tryParseInt, checkIfExists };
