const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema'); // Import your GraphQL type definitions
const resolvers = require('./resolvers'); // Import your GraphQL resolvers

const app = express();

// Modify your authentication middleware to work with Apollo Server
const authenticateMiddleware = (req, res, next) => {
  // Your authentication logic here
  const token = req.headers.authorization || '';

  if (!token) {
    throw new AuthenticationError('Authorization token is required.');
  }

  // Verify the token and set the authenticated user in the request context
  // You can use any authentication library or implementation here

  // Example: Set a user object in the request context
  req.user = {
    id: 'user_id',
    username: 'example_user',
  };

  next();
};

app.use(authenticateMiddleware);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Pass the authenticated user to the context
    return {
      user: req.user,
    };
  },
});

server.applyMiddleware({ app });

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
