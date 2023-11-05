import { gql } from "@/src/__generated__";

export const LOGIN = gql(`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ... on Login {
        message
        token
        user {
          id
          firstName
          lastName
          email
        }
      }
      ... on Error {
        error {
          message
        }
      }
      ... on Errors {
        errors {
          key
          message
        }
      }
    }
  }
`);
