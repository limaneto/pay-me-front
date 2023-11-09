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
`)

export const GET_CREDITS = gql(`
  query getMyCredits($page: Int!, $limit: Int!) {
    getMyCredits(page: $page, limit: $limit) {
      id
      isActive
      title
      description
      value
      debtAccepted
      debtRefused
      creditAccepted
      creditRefused
      isPaid
      dateDue
      dateLoanCompleted
    }
  }
`)
