import { gql } from "apollo-server";

export const readListType = gql `
    type ReadList {
        id: ID!
        book_id: Int
        user_id: Int
        status: Int
    }
`