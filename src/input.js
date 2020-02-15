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
    default: 'model.json',
    coerce: it => path.resolve(it),
    describe: 'The file to input the data model'
  }).option('output', {
    alias: 'o',
    type: 'string',
    coerce: it => it ? path.resolve(it) : undefined,
    describe: 'The file to write the output'
  })
}

module.exports = { createYargsTemplate };
