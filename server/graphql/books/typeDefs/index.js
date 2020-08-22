const { gql } = require("apollo-server-express");

const typeDefsRoot = gql`
  extend type Query {
    book(id: ID!): Book @isAuthenticated
    books: [Book] @isAuthenticated
  }
  extend type Mutation {
    createBook(title: String!): Book
  }
`;

module.exports = typeDefsRoot;
