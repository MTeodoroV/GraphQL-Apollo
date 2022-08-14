import { gql } from "apollo-server";

export const userType = gql `
    type User {
        id: ID
        name: String
        email: String
        password: String
    }
`