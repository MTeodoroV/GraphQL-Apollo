import { gql } from "apollo-server";

export const authType = gql`
    type LoginResponse {
        accessToken: String
        user: User
    }
`;