const debug = require('debug')('Apollo:Member');
const { families } = require('../../data/got');

module.exports = {
  family(parent) {
    debug(parent);
    return families.find(family => family.id === parent.familyId);
  }
};