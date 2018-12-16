import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import { resolvers } from './resolvers';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
});

const options = {
    port: 4000,
    cors: {
      origin: '*'
    }
}

server.start(options, args => console.log(`Server is running on http://localhost:${args.port}`))