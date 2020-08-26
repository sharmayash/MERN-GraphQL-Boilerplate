const { gql } = require("apollo-server-express");

const typeDefsRoot = gql`
  extend type Query {
    book(id: ID!): Book @isAuthenticated
    books: [Book] @isAuthenticated
    userBooks: [Book] @isAuthenticated
  }
  extend type Mutation {
    createBook(title: String!): Book @isAuthenticated
    updateBook(id: ID!, title: String!): Book @isAuthenticated
    deleteBook(id: ID!): Book @isAuthenticated
  }
`;

module.exports = typeDefsRoot;
