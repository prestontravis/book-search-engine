const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Query {
    me: User!
  }

  type Mutation {
    login(username: String!, password: String!): String!
  }
`;

module.exports = typeDefs;
