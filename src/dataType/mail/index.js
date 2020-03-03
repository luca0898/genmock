const LoremIpsum = require("lorem-ipsum").LoremIpsum

module.exports = function ({ count, separator, sulfix }) {
    const lorem = new LoremIpsum();
    let prefix = lorem.generateWords(count || 2).split(/\s/);

    if (typeof separator === "string") {
        prefix = prefix.join(separator);
    } else if (Array.isArray(separator)) {
        prefix = prefix.join(separator[Math.floor(Math.random() * separator.length)]);
    } else {
        prefix = prefix.join("_");
    }

    const domain = lorem.generateWords(1);

    return `${prefix}@${domain}${sulfix || ".com"}`.toLocaleLowerCase();

}