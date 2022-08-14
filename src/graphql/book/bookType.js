import { gql } from "apollo-server";

export const bookType = gql `
    type Book {
        id: ID
        name: String
        description: String
        pageNumber: String
        release_date: String
        author: String
        genre: String
        create_at: String
        update_at: String
    }
`