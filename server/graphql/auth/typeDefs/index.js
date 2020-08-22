const { gql } = require("apollo-server-express");

const typeDefsRoot = gql`
  extend type Query {
    me: User @isAuthenticated
  }

  extend type Mutation {
    login(email: String!, password: String!): AuthData
    signup(name: String!, email: String!, password: String!): AuthData
  }
`;

module.exports = typeDefsRoot;
