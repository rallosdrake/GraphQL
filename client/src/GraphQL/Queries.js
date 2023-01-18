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

export const LOAD_UNITS = gql`
  query getAllUnits {
    getAllUnits {
      id
      unitName
      moveSpeed
      shootValue
      fightValue
      healthPoints
      leadershipValue
      pointValue
    }
  }
`;
