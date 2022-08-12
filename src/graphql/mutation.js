import { gql } from "apollo-server";

export const mutationType = gql`
    type Mutation {
        addGenre(name: String): Genre
        updateGenre(
            id: ID!
            name: String):Genre
        deleteGenre(id: ID!):Boolean
        addAuthor(name: String): Author
        updateAuthor(
            id: ID!
            name: String
            update_at: String
        ): Author
        deleteAuthor(id:ID!):Boolean
    }
`