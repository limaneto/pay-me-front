/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
};

export type AddFriendResponse = Error | Message;

export type ConfirmPaymentResponse = Error | Payment;

export type CreateLoanResponse = Error | Loan;

export type CreatePaymentResponse = Error | Payment;

export type Error = {
  __typename?: 'Error';
  error: Message;
};

export type ErrorKey = {
  __typename?: 'ErrorKey';
  key: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Errors = {
  __typename?: 'Errors';
  errors: Array<ErrorKey>;
};

export type Loan = {
  __typename?: 'Loan';
  creditAccepted?: Maybe<Scalars['Boolean']['output']>;
  creditRefused?: Maybe<Scalars['Boolean']['output']>;
  dateDue?: Maybe<Scalars['Date']['output']>;
  dateLoanCompleted?: Maybe<Scalars['Date']['output']>;
  debtAccepted?: Maybe<Scalars['Boolean']['output']>;
  debtRefused?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isPaid?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type LoanInput = {
  dateDue?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type Login = {
  __typename?: 'Login';
  message: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: User;
};

export type LoginResponse = Error | Errors | Login;

export type Message = {
  __typename?: 'Message';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptLoan: Loan;
  addFriend: AddFriendResponse;
  confirmPayment: ConfirmPaymentResponse;
  createLoan: CreateLoanResponse;
  createPayment: CreatePaymentResponse;
  login: LoginResponse;
  register: RegisterResponse;
};


export type MutationAcceptLoanArgs = {
  loanId: Scalars['ID']['input'];
};


export type MutationAddFriendArgs = {
  friendId: Scalars['String']['input'];
};


export type MutationConfirmPaymentArgs = {
  paymentId: Scalars['ID']['input'];
};


export type MutationCreateLoanArgs = {
  creditorId: Scalars['ID']['input'];
  debtorId: Scalars['ID']['input'];
  loan: LoanInput;
};


export type MutationCreatePaymentArgs = {
  loanId: Scalars['ID']['input'];
  payment: PaymentInput;
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  user?: InputMaybe<UserInput>;
};

export type Payment = {
  __typename?: 'Payment';
  datePaid?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  received?: Maybe<Scalars['Boolean']['output']>;
  value: Scalars['Float']['output'];
};

export type PaymentInput = {
  datePaid?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  received?: InputMaybe<Scalars['Boolean']['input']>;
  value: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllPayments?: Maybe<Array<Maybe<Payment>>>;
  getFriends?: Maybe<Array<Maybe<User>>>;
  getFriendsByEmail?: Maybe<Array<Maybe<User>>>;
  getMyCredits?: Maybe<Array<Maybe<Loan>>>;
  getMyDebts?: Maybe<Array<Maybe<Loan>>>;
};


export type QueryGetAllPaymentsArgs = {
  loanId: Scalars['ID']['input'];
};


export type QueryGetFriendsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page: Scalars['Int']['input'];
};


export type QueryGetFriendsByEmailArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page: Scalars['Int']['input'];
  search: Scalars['String']['input'];
};


export type QueryGetMyCreditsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page: Scalars['Int']['input'];
};


export type QueryGetMyDebtsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page: Scalars['Int']['input'];
};

export type Register = {
  __typename?: 'Register';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserResponse>;
};

export type RegisterResponse = Errors | Register;

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  friends?: Maybe<Array<Maybe<User>>>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Error', error: { __typename?: 'Message', message: string } } | { __typename?: 'Errors', errors: Array<{ __typename?: 'ErrorKey', key: string, message: string }> } | { __typename?: 'Login', message: string, token: string, user: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string } } };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Error"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Errors"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;