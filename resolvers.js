const resolvers = {
    Query: {
      me: (_, __, { user }) => {
        // Return the authenticated user from the context
        return user;
      },
    },
    Mutation: {
      login: (_, { username, password }) => {
        // Your login logic here
        // Return a token or any other authentication result
        return 'token';
      },
    },
  };
  
  module.exports = resolvers;
  