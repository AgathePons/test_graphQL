require('dotenv').config();
const {
  ApolloServer
} = require('apollo-server');
const debug = require('debug')('Apollo');
const { families, members } = require('./data/got');

const port = process.env.PORT || 3000;

const typeDefs = `
  type Query {
    "1st method to test"
    test(name: String, greeting: String): String
    members: [Member]
    membersByFamily(name: String!): [Member]
    families: [Family]
  }

  type Member {
    id: Int
    name: String
    family: Family
  }

  type Family {
    name: String
    description: String
    members: [Member]
  }
`;

const resolvers = {
  Query: {
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
  },
  Member: {
    family(parent) {
      debug(parent);
      return families.find(family => family.id === parent.familyId);
    }
  },
  Family: {
    members (parent) {
      debug(parent);
      return members.filter(member => member.familyId === parent.id);
    }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port).then(({
  url
}) => {
  debug(`Server started on ${url}`);
});