import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';
import { resolvers } from './resolvers';
import { 
  PRISMA_SERVER_DOMAIN, 
  PRISMA_SERVER_PORT, 
  DEBUG, 
  SERVER_PORT, 
  PRISMA_SECRET 
} from './configuration/enviromentVariables';

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: `${PRISMA_SERVER_DOMAIN}${PRISMA_SERVER_PORT}`,
      secret: PRISMA_SECRET,
      debug: DEBUG,
    }),
  }),
});

const options = {
    port: SERVER_PORT,
    cors: {
      origin: '*'
    }
}

server.start(options, args => console.log(`Server is running on http://localhost:${args.port}`))