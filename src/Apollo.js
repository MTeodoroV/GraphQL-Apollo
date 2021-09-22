import { ApolloServer } from "apollo-server-express";

export const apolloServer = new ApolloServer({
    playground: true,
    introspection: true,
    typeDefs: [userType, queryType, skillType, contactType, mutationType, AuthType, problemType, ratingType, commentType, photoType],
    resolvers: [userResolver, skillResolver, errorResolver, AuthResolver, problemResolver, ratingResolver, commentResolver],
    context: ({ req, res }) => ({ req, res }),
    formatError: (err) => {
        if (err.message.startsWith("ER_PARSE_ERROR: You have an error in your SQL syntax;")) {
            return new Error("Internal server error");
        }

        return err;
    },
});