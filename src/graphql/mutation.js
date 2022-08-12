import { gql } from "apollo-server";

export const mutationType = gql`
    type Mutation {
        addGenre(name: String): Genre
        updateGenre(
            id: ID!
            name: String
            ):Genre
        deleteGenre(
            id: ID!
        ):Boolean
    }
`