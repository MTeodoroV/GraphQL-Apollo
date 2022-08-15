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
        addBook(
            name: String
            description: String
            pageNumber: String
            release_date: String
            author_id: ID!
            genre_id: ID!
            ): Book
        updateBook(
            id: ID!
            name: String
            description: String
            pageNumber: String
            release_date: String
            author_id: ID
            genre_id: ID
        ): Book
        deleteBook(id: ID!): Boolean
        addUser(
            name: String
            email: String
            password: String
        ): User
        updateUser(
            id: ID!
            name: String
            email: String
            password: String
        ): User
        deleteUser(id: ID!): Boolean
        addReadList(
            book_id: ID
            user_id: ID
            status: Int
        ): ReadList
        updateReadList(
            id: ID!
            book_id: ID
            user_id: ID
            status: Int
        ): ReadList
        deleteReadList(id: ID!): Boolean
    }
`