const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const resolvers = require("./src/resolvers.js");

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});
server.start({ port: 4040 }, () =>
  console.log("Server is running on http://localhost:4040")
);
