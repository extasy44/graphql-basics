import { GraphQLServer } from "graphql-yoga";

// String, Boolean, Int, Float, ID

//Type definitions (Schema)
const typeDefs = `
  type Query {
    greeting(name: String): String!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

//Resolvers
const resolvers = {
  Query: {
    greeting(parent, args, ctx, info) {
      if (args.name) {
        return `Hello, ${args.name}`;
      } else {
        return "Hello";
      }
    },
    me() {
      return {
        id: "12345",
        name: "mike",
        email: "mike@aaa.com",
      };
    },
    post() {
      return {
        id: "12334",
        title: "GQL Post",
        body: "GQL Body",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is up");
});
