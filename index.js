require('dotenv').config();
const {
  ApolloServer
} = require('apollo-server');

const debug = require('debug')('Apollo');
const { families, members } = require('./data/got');

const port = process.env.PORT || 3000;

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(port).then(({
  url
}) => {
  debug(`Server started on ${url}`);
});