const resolvers = require("./resolvers");
const typeDefsRoot = require("./typeDefs");

const { User, AuthData } = require("./typeDefs/types");

module.exports = {
  typeDefs: [typeDefsRoot, User, AuthData],
  resolvers,
};
