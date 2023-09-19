/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CheckAuth {\n  checkAuth {\n    ...UserParts\n  }\n}": types.CheckAuthDocument,
    "mutation Singin($loginUserInput: LoginUserInput!) {\n  singin(loginUserInput: $loginUserInput) {\n    user {\n      ...UserParts\n    }\n    access_token\n    reflesh_token\n  }\n}": types.SinginDocument,
    "mutation Reflesh {\n  reflesh {\n    access_token\n  }\n}": types.RefleshDocument,
    "mutation Signup($createUserInput: CreateUserInput!) {\n  signup(createUserInput: $createUserInput) {\n    ...UserParts\n  }\n}": types.SignupDocument,
    "mutation RemoveUser($removeUserId: ID!) {\n  removeUser(id: $removeUserId) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}": types.RemoveUserDocument,
    "mutation UpdateUser($updateUserId: ID!, $updateUserInput: UpdateUserInput!) {\n  updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}": types.UpdateUserDocument,
    "query SingleUser($id: ID!) {\n  user(id: $id) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}": types.SingleUserDocument,
    "fragment UserParts on User {\n  id\n  role\n  firstName\n  lastName\n  email\n}": types.UserPartsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CheckAuth {\n  checkAuth {\n    ...UserParts\n  }\n}"): (typeof documents)["query CheckAuth {\n  checkAuth {\n    ...UserParts\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Singin($loginUserInput: LoginUserInput!) {\n  singin(loginUserInput: $loginUserInput) {\n    user {\n      ...UserParts\n    }\n    access_token\n    reflesh_token\n  }\n}"): (typeof documents)["mutation Singin($loginUserInput: LoginUserInput!) {\n  singin(loginUserInput: $loginUserInput) {\n    user {\n      ...UserParts\n    }\n    access_token\n    reflesh_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Reflesh {\n  reflesh {\n    access_token\n  }\n}"): (typeof documents)["mutation Reflesh {\n  reflesh {\n    access_token\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Signup($createUserInput: CreateUserInput!) {\n  signup(createUserInput: $createUserInput) {\n    ...UserParts\n  }\n}"): (typeof documents)["mutation Signup($createUserInput: CreateUserInput!) {\n  signup(createUserInput: $createUserInput) {\n    ...UserParts\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation RemoveUser($removeUserId: ID!) {\n  removeUser(id: $removeUserId) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation RemoveUser($removeUserId: ID!) {\n  removeUser(id: $removeUserId) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UpdateUser($updateUserId: ID!, $updateUserInput: UpdateUserInput!) {\n  updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation UpdateUser($updateUserId: ID!, $updateUserInput: UpdateUserInput!) {\n  updateUser(id: $updateUserId, updateUserInput: $updateUserInput) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SingleUser($id: ID!) {\n  user(id: $id) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query SingleUser($id: ID!) {\n  user(id: $id) {\n    ...UserParts\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserParts on User {\n  id\n  role\n  firstName\n  lastName\n  email\n}"): (typeof documents)["fragment UserParts on User {\n  id\n  role\n  firstName\n  lastName\n  email\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;