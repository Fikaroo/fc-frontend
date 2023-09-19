import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SinginMutationVariables = Types.Exact<{
  loginUserInput: Types.LoginUserInput;
}>;


export type SinginMutation = { __typename?: 'Mutation', singin: { __typename?: 'LoginAuthResponse', access_token: string, reflesh_token: string, user: { __typename?: 'User', id: string, role: Types.Role, firstName: string, lastName: string, email: string } } };

export type RefleshMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type RefleshMutation = { __typename?: 'Mutation', reflesh: { __typename?: 'TokenResponse', access_token?: string | null } };

export type SignupMutationVariables = Types.Exact<{
  createUserInput: Types.CreateUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: string, role: Types.Role, firstName: string, lastName: string, email: string } };

export type RemoveUserMutationVariables = Types.Exact<{
  removeUserId: Types.Scalars['ID']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'User', createdAt?: any | null, updatedAt?: any | null, id: string, role: Types.Role, firstName: string, lastName: string, email: string } };

export type UpdateUserMutationVariables = Types.Exact<{
  updateUserId: Types.Scalars['ID']['input'];
  updateUserInput: Types.UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', createdAt?: any | null, updatedAt?: any | null, id: string, role: Types.Role, firstName: string, lastName: string, email: string } };

export type SingleUserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type SingleUserQuery = { __typename?: 'Query', user: { __typename?: 'User', createdAt?: any | null, updatedAt?: any | null, id: string, role: Types.Role, firstName: string, lastName: string, email: string } };

export type UserPartsFragment = { __typename?: 'User', id: string, role: Types.Role, firstName: string, lastName: string, email: string };

export const UserPartsFragmentDoc = gql`
    fragment UserParts on User {
  id
  role
  firstName
  lastName
  email
}
    `;
export const SinginDocument = gql`
    mutation Singin($loginUserInput: LoginUserInput!) {
  singin(loginUserInput: $loginUserInput) {
    user {
      ...UserParts
    }
    access_token
    reflesh_token
  }
}
    ${UserPartsFragmentDoc}`;
export const RefleshDocument = gql`
    mutation Reflesh {
  reflesh {
    access_token
  }
}
    `;
export const SignupDocument = gql`
    mutation Signup($createUserInput: CreateUserInput!) {
  signup(createUserInput: $createUserInput) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export const RemoveUserDocument = gql`
    mutation RemoveUser($removeUserId: ID!) {
  removeUser(id: $removeUserId) {
    ...UserParts
    createdAt
    updatedAt
  }
}
    ${UserPartsFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserId: ID!, $updateUserInput: UpdateUserInput!) {
  updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {
    ...UserParts
    createdAt
    updatedAt
  }
}
    ${UserPartsFragmentDoc}`;
export const SingleUserDocument = gql`
    query SingleUser($id: ID!) {
  user(id: $id) {
    ...UserParts
    createdAt
    updatedAt
  }
}
    ${UserPartsFragmentDoc}`;