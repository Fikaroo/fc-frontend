import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type CheckAuthQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CheckAuthQuery = { __typename?: 'Query', checkAuth: { __typename?: 'CheckAuthResponse', auth: boolean } };

export type SinginMutationVariables = Types.Exact<{
  loginUserInput: Types.LoginUserInput;
}>;


export type SinginMutation = { __typename?: 'Mutation', singin: { __typename?: 'User', id: string, role: Types.Role, firstName: string, lastName: string, email: string } };

export type LogoutMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'AuthResponse', message: string } };

export type RefleshMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type RefleshMutation = { __typename?: 'Mutation', reflesh: { __typename?: 'AuthResponse', message: string } };

export type SignupMutationVariables = Types.Exact<{
  createUserInput: Types.CreateUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: string, role: Types.Role, firstName: string, lastName: string, email: string, password?: string | null, createdAt?: any | null, updatedAt?: any | null } };

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
export const CheckAuthDocument = gql`
    query CheckAuth {
  checkAuth {
    auth
  }
}
    `;
export const SinginDocument = gql`
    mutation Singin($loginUserInput: LoginUserInput!) {
  singin(loginUserInput: $loginUserInput) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
  }
}
    `;
export const RefleshDocument = gql`
    mutation Reflesh {
  reflesh {
    message
  }
}
    `;
export const SignupDocument = gql`
    mutation Signup($createUserInput: CreateUserInput!) {
  signup(createUserInput: $createUserInput) {
    id
    role
    firstName
    lastName
    email
    password
    createdAt
    updatedAt
  }
}
    `;
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