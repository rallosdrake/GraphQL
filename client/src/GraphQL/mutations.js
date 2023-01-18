import { gql } from "@apollo/client";

// export const CREATE_USER_MUTATION = gql`
//   mutation createUser(
//     $firstName: String!
//     $lastName: String!
//     $email: String!
//     $password: String
//   ) {
//     createUser(
//       firstName: $firstName
//       lastName: $lastName
//       email: $email
//       password: $password
//     ) {
//       id
//     }
//   }
// `;

export const CREATE_UNIT_MUTATION = gql`
  mutation createUnit(
    $unitName: String!
    $moveSpeed: Int!
    $shootValue: Int!
    $fightValue: Int!
    $healthPoints: Int!
    $leadershipValue: Int!
    $pointValue: Int!
  ) {
    createUnit(
      unitName: $unitName
      moveSpeed: $moveSpeed
      shootValue: $shootValue
      fightValue: $fightValue
      healthPoints: $healthPoints
      leadershipValue: $leadershipValue
      pointValue: $pointValue
    ) {
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
