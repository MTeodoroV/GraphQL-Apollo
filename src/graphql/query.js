import {gql} from "apollo-server";

export const queryType = gql `
    type Query {
        genre(id: ID!): Genre
        genres:[Genre]
    }
`;