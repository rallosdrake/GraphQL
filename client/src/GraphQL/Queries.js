import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query getAllUsers($limit: Int) {
    getAllUsers(limit: $limit) {
      id
      firstName
      lastName
      email
    }
  }
`;
