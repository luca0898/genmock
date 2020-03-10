const { generate } = require("./builder");
const output = require("./output");
const { createYargsTemplate, createInputFunction } = require("./input");

const args = createYargsTemplate(require("yargs")).argv;

function main() {
  const model = createInputFunction(args.model)();
  const result = generate({ ...args, model });
  output(args.output)(JSON.stringify(result, null, 2));
}

if (require.main === module) {
  main();
}

module.exports = generate;
