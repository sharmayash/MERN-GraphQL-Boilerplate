const { gql } = require("apollo-server-express");

const User = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

module.exports = {
  User,
};
