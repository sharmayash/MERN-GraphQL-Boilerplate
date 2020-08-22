const { gql } = require("apollo-server-express");

const Book = gql`
  type Book {
    id: ID!
    title: String!
    createdBy: User!
    created: DateTime!
  }
`;

module.exports = {
  Book,
};
