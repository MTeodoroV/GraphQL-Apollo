import { gql } from "apollo-server";

export const genreType = gql `
    type Genre {
        id: ID
        name: String
        create_at: String
        update_at: String 
    }
`