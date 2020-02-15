const fs = require('fs');
const path = require('path');

/**
 * Create the CLI argument template
 */
function createYargsTemplate(yargs) {
  return yargs
  .help()
  .option('number', {
    alias: 'n',
    type: 'number',
    default: 1,
    description: 'The number of generated data'
  }).option('model', {
    alias: 'm',
    type: 'string',
    coerce: it => it ? path.resolve(it) : undefined,
    describe: 'The file to input the data model'
  }).option('output', {
    alias: 'o',
    type: 'string',
    coerce: it => it ? path.resolve(it) : undefined,
    describe: 'The file to write the output'
  })
}

/**
 * Creates the function to input data from file or from stdin
 *
 * @param {string | undefined} modelFile - The path to the file to input from. Falsy values means stdin
 * @returns {function(): string}
 */
function createInputFunction(modelFile) {
  return () => JSON.parse(fs.readFileSync(modelFile || 0, 'utf-8'));
}

module.exports = { createYargsTemplate, createInputFunction };
