import {gql} from "apollo-server";

export const queryType = gql `
    type Query {
        genre(id: ID!): Genre
        genres: [Genre]
        author(id: ID!): Author
        authors: [Author]
        book(id: ID!): Book
        books: [Book]
        user(id: ID!): User
        users: [User]
        readList(id: ID!): ReadList
        readLists: [ReadList]
    }
`;