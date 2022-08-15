import { ApolloServer, gql } from "apollo-server-express";
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
  } from 'apollo-server-core';
import { queryType } from "./graphql/Query.js";
import { mutationType } from "./graphql/Mutation.js";
import { genreType } from "./graphql/genre/genreType.js";
import { genreResolver } from "./graphql/genre/genreResolver.js";
import { authorType } from "./graphql/author/authorType.js";
import { authorResolver } from "./graphql/author/authorResolver.js";
import { bookType } from "./graphql/book/bookType.js";
import { bookResolver } from "./graphql/book/bookResolver.js";
import { userType } from "./graphql/user/userType.js";
import { userResolver } from "./graphql/user/userResolver.js";
import { readListType } from "./graphql/readList/readListType.js";
import { readListResolver } from "./graphql/readList/readListResolver.js";
import { authType } from "./graphql/auth/authType.js";
import { authResolver } from "./graphql/auth/authResolver.js";

export const apolloServer = new ApolloServer({
    playground: true,
    introspection: true,
    typeDefs: [queryType, mutationType, genreType, authorType, bookType, userType, readListType, authType],
    resolvers:[genreResolver, authorResolver, bookResolver, userResolver, readListResolver, authResolver],
    plugins: [
    //   ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    context: ({ req, res }) => ({ req, res }),
    formatError: (err) => {
        if (err.message.startsWith("ER_PARSE_ERROR: You have an error in your SQL syntax;")) {
            return new Error("Internal server error");
        }

        return err;
    },
});