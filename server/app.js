const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const schema = require("./graphql");
const context = require("./utils/context");

const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({
    user: await context.getUser(req),
  }),
  tracing: true, // comment this line in production
});

const app = express();

server.applyMiddleware({
  app,
});

module.exports = app;
