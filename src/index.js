// import { ApolloServer, gql} from 'apollo-server-express';
// import {
//   ApolloServerPluginDrainHttpServer,
//   ApolloServerPluginLandingPageLocalDefault,
// } from 'apollo-server-core';
import express from 'express';
import http from 'http';
// import helmet from 'helmet';
import morgan from 'morgan';
import {apolloServer} from './apollo.js'


// async function startApolloServer(typeDefs, resolvers) {
  const app = express();
  const httpServer = http.createServer(app);

  // const apolloServer = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   csrfPrevention: true,
  //   cache: 'bounded',
  //   plugins: [
  //     ApolloServerPluginDrainHttpServer({ httpServer }),
  //     ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  //   ],
  // });

  app.use(morgan("tiny"));
  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  await new Promise(resolve => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Servidor rodando http://localhost:4000${apolloServer.graphqlPath}`);
// }


// startApolloServer(typeDefs);