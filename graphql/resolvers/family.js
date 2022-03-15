const debug = require('debug')('Apollo:Family');
const { members } = require('../../data/got');

module.exports = {
  members (parent) {
    debug(parent);
    return members.filter(member => member.familyId === parent.id);
  }
}