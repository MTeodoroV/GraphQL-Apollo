import { gql } from 'apollo-server';

export const authorType = gql `
    type Author {
        id: ID
        name: String
        create_at: String
        update_at: String 
    }
`