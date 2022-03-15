const debug = require('debug')('Apollo:Query');
const { families, members } = require('../../data/got');

module.exports = {
  test(_, { name, greeting }) {
    return `${greeting || 'Hello'} ${name || 'GraphQL!'}`;
  },
  members() {
    return members;
  },
  membersByFamily(_, { name }) {
    const family = families.find(family => family.name === name);
    if (!family) {
      return null;
    }
    return members.filter(member => member.familyId === family.id);
  },
  families: () => families
};