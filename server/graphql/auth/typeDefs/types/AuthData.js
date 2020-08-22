const { gql } = require("apollo-server-express");

const AuthData = gql`
  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }
`;

module.exports = {
  AuthData,
};
