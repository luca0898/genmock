/**
 * Key/Value list of the existing data generators
 *
 * @type {{string: function}}
 */
module.exports = {
  CURRENCY: require('./currency'),
  GUID: require('./guid'),
  LONGTEXT: require('./longtext'),
  NAME: require('./name'),
  DATE: require('./date'),
  PHONE: require('./phone')
};
