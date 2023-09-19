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
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export type LoginAuthResponse = {
  __typename?: 'LoginAuthResponse';
  access_token: Scalars['String']['output'];
  reflesh_token: Scalars['String']['output'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  reflesh: TokenResponse;
  removeUser: User;
  signup: User;
  singin: LoginAuthResponse;
  updateUser: User;
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSinginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  checkAuth: User;
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  SuperAdmin = 'SUPER_ADMIN',
  Supplier = 'SUPPLIER'
}

export type TokenResponse = {
  __typename?: 'TokenResponse';
  access_token?: Maybe<Scalars['String']['output']>;
  reflesh_token?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: Role;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CheckAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckAuthQuery = { __typename?: 'Query', checkAuth: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserPartsFragment': UserPartsFragment } }
  ) };

export type SinginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type SinginMutation = { __typename?: 'Mutation', singin: { __typename?: 'LoginAuthResponse', access_token: string, reflesh_token: string, user: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserPartsFragment': UserPartsFragment } }
    ) } };

export type RefleshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefleshMutation = { __typename?: 'Mutation', reflesh: { __typename?: 'TokenResponse', access_token?: string | null } };

export type SignupMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: (
    { __typename?: 'User' }
    & { ' $fragmentRefs'?: { 'UserPartsFragment': UserPartsFragment } }
  ) };

export type RemoveUserMutationVariables = Exact<{
  removeUserId: Scalars['ID']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: (
    { __typename?: 'User', createdAt?: any | null, updatedAt?: any | null }
    & { ' $fragmentRefs'?: { 'UserPartsFragment': UserPartsFragment } }
  ) };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['ID']['input'];
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: (
    { __typename?: 'User', createdAt?: any | null, updatedAt?: any | null }
    & { ' $fragmentRefs'?: { 'UserPartsFragment': UserPartsFragment } }
  ) };

export type SingleUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SingleUserQuery = { __typename?: 'Query', user: (
    { __typename?: 'User', createdAt?: any | null, updatedAt?: any | null }
    & { ' $fragmentRefs'?: { 'UserPartsFragment': UserPartsFragment } }
  ) };

export type UserPartsFragment = { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string } & { ' $fragmentName'?: 'UserPartsFragment' };

export const UserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UserPartsFragment, unknown>;
export const CheckAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<CheckAuthQuery, CheckAuthQueryVariables>;
export const SinginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Singin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"reflesh_token"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<SinginMutation, SinginMutationVariables>;
export const RefleshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Reflesh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reflesh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}}]}}]}}]} as unknown as DocumentNode<RefleshMutation, RefleshMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const RemoveUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removeUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removeUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<RemoveUserMutation, RemoveUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const SingleUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SingleUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<SingleUserQuery, SingleUserQueryVariables>;