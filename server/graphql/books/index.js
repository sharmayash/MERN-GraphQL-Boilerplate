const resolvers = require("./resolvers");
const typeDefsRoot = require("./typeDefs");

const { Book } = require("./typeDefs/types");

module.exports = {
  typeDefs: [typeDefsRoot, Book],
  resolvers,
};
