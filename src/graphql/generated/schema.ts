import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  message: Scalars['String']['output'];
};

export type CheckAuthResponse = {
  __typename?: 'CheckAuthResponse';
  auth: Scalars['Boolean']['output'];
};

export type CreateUnitInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: Role;
};

export type CreateVariantInput = {
  name: Scalars['String']['input'];
  unitId: Scalars['ID']['input'];
};

export type LoginUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUnit: Unit;
  createVariant: Variant;
  logout: AuthResponse;
  reflesh: AuthResponse;
  removeUnit: Unit;
  removeUser: User;
  removeVariant: Variant;
  signup: User;
  singin: User;
  updateUnit: Unit;
  updateUser: User;
  updateVariant: Variant;
};


export type MutationCreateUnitArgs = {
  createUnitInput: CreateUnitInput;
};


export type MutationCreateVariantArgs = {
  createVariantInput: CreateVariantInput;
};


export type MutationRemoveUnitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveVariantArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignupArgs = {
  createUserInput: CreateUserInput;
};


export type MutationSinginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateUnitArgs = {
  id: Scalars['ID']['input'];
  updateUnitInput: UpdateUnitInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateVariantArgs = {
  id: Scalars['ID']['input'];
  updateVariantInput: UpdateVariantInput;
};

export type Query = {
  __typename?: 'Query';
  checkAuth: CheckAuthResponse;
  unit: Unit;
  units: Array<Unit>;
  user: User;
  variant: Variant;
  variants: Array<Variant>;
};


export type QueryUnitArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVariantArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  SuperAdmin = 'SUPER_ADMIN',
  Supplier = 'SUPPLIER'
}

export type Unit = {
  __typename?: 'Unit';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Timestamp']['output'];
  value: Scalars['String']['output'];
  variants: Array<Variant>;
};

export type UpdateUnitInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
};

export type UpdateVariantInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  unitId?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Timestamp']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role: Role;
  updatedAt: Scalars['Timestamp']['output'];
};

export type Variant = {
  __typename?: 'Variant';
  createdAt: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  unitId: Scalars['ID']['output'];
  updatedAt: Scalars['Timestamp']['output'];
};

export type CheckAuthQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckAuthQuery = { __typename?: 'Query', checkAuth: { __typename?: 'CheckAuthResponse', auth: boolean } };

export type SinginMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;


export type SinginMutation = { __typename?: 'Mutation', singin: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'AuthResponse', message: string } };

export type RefleshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefleshMutation = { __typename?: 'Mutation', reflesh: { __typename?: 'AuthResponse', message: string } };

export type SignupMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type AllUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUnitsQuery = { __typename?: 'Query', units: Array<{ __typename?: 'Unit', id: string, name: string, value: string, createdAt: any, updatedAt: any, variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> }> };

export type CreateUnitMutationVariables = Exact<{
  createUnitInput: CreateUnitInput;
}>;


export type CreateUnitMutation = { __typename?: 'Mutation', createUnit: { __typename?: 'Unit', id: string, name: string, value: string, createdAt: any, updatedAt: any, variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> } };

export type RemoveUnitMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveUnitMutation = { __typename?: 'Mutation', removeUnit: { __typename?: 'Unit', id: string, name: string, value: string, createdAt: any, updatedAt: any, variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> } };

export type SingleUnitQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SingleUnitQuery = { __typename?: 'Query', unit: { __typename?: 'Unit', id: string, name: string, value: string, createdAt: any, updatedAt: any, variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> } };

export type UnitPartsFragment = { __typename?: 'Unit', id: string, name: string, value: string, createdAt: any, updatedAt: any, variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> };

export type UpdateUnitMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  updateUnitInput: UpdateUnitInput;
}>;


export type UpdateUnitMutation = { __typename?: 'Mutation', updateUnit: { __typename?: 'Unit', id: string, name: string, value: string, createdAt: any, updatedAt: any, variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> } };

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type SingleUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SingleUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any } };

export type UserPartsFragment = { __typename?: 'User', id: string, role: Role, firstName: string, lastName: string, email: string, createdAt: any, updatedAt: any };

export type AllVariantsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllVariantsQuery = { __typename?: 'Query', variants: Array<{ __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any }> };

export type CreateVariantMutationVariables = Exact<{
  createVariantInput: CreateVariantInput;
}>;


export type CreateVariantMutation = { __typename?: 'Mutation', createVariant: { __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any } };

export type RemoveVariantMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveVariantMutation = { __typename?: 'Mutation', removeVariant: { __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any } };

export type SingleVariantQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SingleVariantQuery = { __typename?: 'Query', variant: { __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any } };

export type UpdateVariantMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  updateVariantInput: UpdateVariantInput;
}>;


export type UpdateVariantMutation = { __typename?: 'Mutation', updateVariant: { __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any } };

export type VariantPartsFragment = { __typename?: 'Variant', id: string, name: string, unitId: string, createdAt: any, updatedAt: any };

export const VariantPartsFragmentDoc = gql`
    fragment VariantParts on Variant {
  id
  name
  unitId
  createdAt
  updatedAt
}
    `;
export const UnitPartsFragmentDoc = gql`
    fragment UnitParts on Unit {
  id
  name
  value
  createdAt
  updatedAt
  variants {
    ...VariantParts
  }
}
    ${VariantPartsFragmentDoc}`;
export const UserPartsFragmentDoc = gql`
    fragment UserParts on User {
  id
  role
  firstName
  lastName
  email
  createdAt
  updatedAt
}
    `;
export const CheckAuthDocument = gql`
    query CheckAuth {
  checkAuth {
    auth
  }
}
    `;

/**
 * __useCheckAuthQuery__
 *
 * To run a query within a React component, call `useCheckAuthQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAuthQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAuthQuery({
 *   variables: {
 *   },
 * });
 */
export function useCheckAuthQuery(baseOptions?: Apollo.QueryHookOptions<CheckAuthQuery, CheckAuthQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckAuthQuery, CheckAuthQueryVariables>(CheckAuthDocument, options);
      }
export function useCheckAuthLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckAuthQuery, CheckAuthQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckAuthQuery, CheckAuthQueryVariables>(CheckAuthDocument, options);
        }
export type CheckAuthQueryHookResult = ReturnType<typeof useCheckAuthQuery>;
export type CheckAuthLazyQueryHookResult = ReturnType<typeof useCheckAuthLazyQuery>;
export type CheckAuthQueryResult = Apollo.QueryResult<CheckAuthQuery, CheckAuthQueryVariables>;
export const SinginDocument = gql`
    mutation Singin($loginUserInput: LoginUserInput!) {
  singin(loginUserInput: $loginUserInput) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type SinginMutationFn = Apollo.MutationFunction<SinginMutation, SinginMutationVariables>;

/**
 * __useSinginMutation__
 *
 * To run a mutation, you first call `useSinginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSinginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [singinMutation, { data, loading, error }] = useSinginMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useSinginMutation(baseOptions?: Apollo.MutationHookOptions<SinginMutation, SinginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SinginMutation, SinginMutationVariables>(SinginDocument, options);
      }
export type SinginMutationHookResult = ReturnType<typeof useSinginMutation>;
export type SinginMutationResult = Apollo.MutationResult<SinginMutation>;
export type SinginMutationOptions = Apollo.BaseMutationOptions<SinginMutation, SinginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefleshDocument = gql`
    mutation Reflesh {
  reflesh {
    message
  }
}
    `;
export type RefleshMutationFn = Apollo.MutationFunction<RefleshMutation, RefleshMutationVariables>;

/**
 * __useRefleshMutation__
 *
 * To run a mutation, you first call `useRefleshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefleshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refleshMutation, { data, loading, error }] = useRefleshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefleshMutation(baseOptions?: Apollo.MutationHookOptions<RefleshMutation, RefleshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefleshMutation, RefleshMutationVariables>(RefleshDocument, options);
      }
export type RefleshMutationHookResult = ReturnType<typeof useRefleshMutation>;
export type RefleshMutationResult = Apollo.MutationResult<RefleshMutation>;
export type RefleshMutationOptions = Apollo.BaseMutationOptions<RefleshMutation, RefleshMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($createUserInput: CreateUserInput!) {
  signup(createUserInput: $createUserInput) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const AllUnitsDocument = gql`
    query AllUnits {
  units {
    ...UnitParts
  }
}
    ${UnitPartsFragmentDoc}`;

/**
 * __useAllUnitsQuery__
 *
 * To run a query within a React component, call `useAllUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUnitsQuery(baseOptions?: Apollo.QueryHookOptions<AllUnitsQuery, AllUnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUnitsQuery, AllUnitsQueryVariables>(AllUnitsDocument, options);
      }
export function useAllUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUnitsQuery, AllUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUnitsQuery, AllUnitsQueryVariables>(AllUnitsDocument, options);
        }
export type AllUnitsQueryHookResult = ReturnType<typeof useAllUnitsQuery>;
export type AllUnitsLazyQueryHookResult = ReturnType<typeof useAllUnitsLazyQuery>;
export type AllUnitsQueryResult = Apollo.QueryResult<AllUnitsQuery, AllUnitsQueryVariables>;
export const CreateUnitDocument = gql`
    mutation CreateUnit($createUnitInput: CreateUnitInput!) {
  createUnit(createUnitInput: $createUnitInput) {
    ...UnitParts
  }
}
    ${UnitPartsFragmentDoc}`;
export type CreateUnitMutationFn = Apollo.MutationFunction<CreateUnitMutation, CreateUnitMutationVariables>;

/**
 * __useCreateUnitMutation__
 *
 * To run a mutation, you first call `useCreateUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnitMutation, { data, loading, error }] = useCreateUnitMutation({
 *   variables: {
 *      createUnitInput: // value for 'createUnitInput'
 *   },
 * });
 */
export function useCreateUnitMutation(baseOptions?: Apollo.MutationHookOptions<CreateUnitMutation, CreateUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUnitMutation, CreateUnitMutationVariables>(CreateUnitDocument, options);
      }
export type CreateUnitMutationHookResult = ReturnType<typeof useCreateUnitMutation>;
export type CreateUnitMutationResult = Apollo.MutationResult<CreateUnitMutation>;
export type CreateUnitMutationOptions = Apollo.BaseMutationOptions<CreateUnitMutation, CreateUnitMutationVariables>;
export const RemoveUnitDocument = gql`
    mutation RemoveUnit($id: ID!) {
  removeUnit(id: $id) {
    ...UnitParts
  }
}
    ${UnitPartsFragmentDoc}`;
export type RemoveUnitMutationFn = Apollo.MutationFunction<RemoveUnitMutation, RemoveUnitMutationVariables>;

/**
 * __useRemoveUnitMutation__
 *
 * To run a mutation, you first call `useRemoveUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUnitMutation, { data, loading, error }] = useRemoveUnitMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUnitMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUnitMutation, RemoveUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUnitMutation, RemoveUnitMutationVariables>(RemoveUnitDocument, options);
      }
export type RemoveUnitMutationHookResult = ReturnType<typeof useRemoveUnitMutation>;
export type RemoveUnitMutationResult = Apollo.MutationResult<RemoveUnitMutation>;
export type RemoveUnitMutationOptions = Apollo.BaseMutationOptions<RemoveUnitMutation, RemoveUnitMutationVariables>;
export const SingleUnitDocument = gql`
    query SingleUnit($id: ID!) {
  unit(id: $id) {
    ...UnitParts
  }
}
    ${UnitPartsFragmentDoc}`;

/**
 * __useSingleUnitQuery__
 *
 * To run a query within a React component, call `useSingleUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleUnitQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleUnitQuery(baseOptions: Apollo.QueryHookOptions<SingleUnitQuery, SingleUnitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleUnitQuery, SingleUnitQueryVariables>(SingleUnitDocument, options);
      }
export function useSingleUnitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleUnitQuery, SingleUnitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleUnitQuery, SingleUnitQueryVariables>(SingleUnitDocument, options);
        }
export type SingleUnitQueryHookResult = ReturnType<typeof useSingleUnitQuery>;
export type SingleUnitLazyQueryHookResult = ReturnType<typeof useSingleUnitLazyQuery>;
export type SingleUnitQueryResult = Apollo.QueryResult<SingleUnitQuery, SingleUnitQueryVariables>;
export const UpdateUnitDocument = gql`
    mutation UpdateUnit($id: ID!, $updateUnitInput: UpdateUnitInput!) {
  updateUnit(id: $id, updateUnitInput: $updateUnitInput) {
    ...UnitParts
  }
}
    ${UnitPartsFragmentDoc}`;
export type UpdateUnitMutationFn = Apollo.MutationFunction<UpdateUnitMutation, UpdateUnitMutationVariables>;

/**
 * __useUpdateUnitMutation__
 *
 * To run a mutation, you first call `useUpdateUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUnitMutation, { data, loading, error }] = useUpdateUnitMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateUnitInput: // value for 'updateUnitInput'
 *   },
 * });
 */
export function useUpdateUnitMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUnitMutation, UpdateUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUnitMutation, UpdateUnitMutationVariables>(UpdateUnitDocument, options);
      }
export type UpdateUnitMutationHookResult = ReturnType<typeof useUpdateUnitMutation>;
export type UpdateUnitMutationResult = Apollo.MutationResult<UpdateUnitMutation>;
export type UpdateUnitMutationOptions = Apollo.BaseMutationOptions<UpdateUnitMutation, UpdateUnitMutationVariables>;
export const RemoveUserDocument = gql`
    mutation RemoveUser($id: ID!) {
  removeUser(id: $id) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type RemoveUserMutationFn = Apollo.MutationFunction<RemoveUserMutation, RemoveUserMutationVariables>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserMutation, RemoveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument, options);
      }
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>;
export type RemoveUserMutationResult = Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $updateUserInput: UpdateUserInput!) {
  updateUser(id: $id, updateUserInput: $updateUserInput) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const SingleUserDocument = gql`
    query SingleUser($id: ID!) {
  user(id: $id) {
    ...UserParts
  }
}
    ${UserPartsFragmentDoc}`;

/**
 * __useSingleUserQuery__
 *
 * To run a query within a React component, call `useSingleUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleUserQuery(baseOptions: Apollo.QueryHookOptions<SingleUserQuery, SingleUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument, options);
      }
export function useSingleUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleUserQuery, SingleUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument, options);
        }
export type SingleUserQueryHookResult = ReturnType<typeof useSingleUserQuery>;
export type SingleUserLazyQueryHookResult = ReturnType<typeof useSingleUserLazyQuery>;
export type SingleUserQueryResult = Apollo.QueryResult<SingleUserQuery, SingleUserQueryVariables>;
export const AllVariantsDocument = gql`
    query AllVariants {
  variants {
    ...VariantParts
  }
}
    ${VariantPartsFragmentDoc}`;

/**
 * __useAllVariantsQuery__
 *
 * To run a query within a React component, call `useAllVariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllVariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllVariantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllVariantsQuery(baseOptions?: Apollo.QueryHookOptions<AllVariantsQuery, AllVariantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllVariantsQuery, AllVariantsQueryVariables>(AllVariantsDocument, options);
      }
export function useAllVariantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllVariantsQuery, AllVariantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllVariantsQuery, AllVariantsQueryVariables>(AllVariantsDocument, options);
        }
export type AllVariantsQueryHookResult = ReturnType<typeof useAllVariantsQuery>;
export type AllVariantsLazyQueryHookResult = ReturnType<typeof useAllVariantsLazyQuery>;
export type AllVariantsQueryResult = Apollo.QueryResult<AllVariantsQuery, AllVariantsQueryVariables>;
export const CreateVariantDocument = gql`
    mutation CreateVariant($createVariantInput: CreateVariantInput!) {
  createVariant(createVariantInput: $createVariantInput) {
    ...VariantParts
  }
}
    ${VariantPartsFragmentDoc}`;
export type CreateVariantMutationFn = Apollo.MutationFunction<CreateVariantMutation, CreateVariantMutationVariables>;

/**
 * __useCreateVariantMutation__
 *
 * To run a mutation, you first call `useCreateVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVariantMutation, { data, loading, error }] = useCreateVariantMutation({
 *   variables: {
 *      createVariantInput: // value for 'createVariantInput'
 *   },
 * });
 */
export function useCreateVariantMutation(baseOptions?: Apollo.MutationHookOptions<CreateVariantMutation, CreateVariantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVariantMutation, CreateVariantMutationVariables>(CreateVariantDocument, options);
      }
export type CreateVariantMutationHookResult = ReturnType<typeof useCreateVariantMutation>;
export type CreateVariantMutationResult = Apollo.MutationResult<CreateVariantMutation>;
export type CreateVariantMutationOptions = Apollo.BaseMutationOptions<CreateVariantMutation, CreateVariantMutationVariables>;
export const RemoveVariantDocument = gql`
    mutation RemoveVariant($id: ID!) {
  removeVariant(id: $id) {
    ...VariantParts
  }
}
    ${VariantPartsFragmentDoc}`;
export type RemoveVariantMutationFn = Apollo.MutationFunction<RemoveVariantMutation, RemoveVariantMutationVariables>;

/**
 * __useRemoveVariantMutation__
 *
 * To run a mutation, you first call `useRemoveVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeVariantMutation, { data, loading, error }] = useRemoveVariantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveVariantMutation(baseOptions?: Apollo.MutationHookOptions<RemoveVariantMutation, RemoveVariantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveVariantMutation, RemoveVariantMutationVariables>(RemoveVariantDocument, options);
      }
export type RemoveVariantMutationHookResult = ReturnType<typeof useRemoveVariantMutation>;
export type RemoveVariantMutationResult = Apollo.MutationResult<RemoveVariantMutation>;
export type RemoveVariantMutationOptions = Apollo.BaseMutationOptions<RemoveVariantMutation, RemoveVariantMutationVariables>;
export const SingleVariantDocument = gql`
    query SingleVariant($id: ID!) {
  variant(id: $id) {
    ...VariantParts
  }
}
    ${VariantPartsFragmentDoc}`;

/**
 * __useSingleVariantQuery__
 *
 * To run a query within a React component, call `useSingleVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleVariantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleVariantQuery(baseOptions: Apollo.QueryHookOptions<SingleVariantQuery, SingleVariantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleVariantQuery, SingleVariantQueryVariables>(SingleVariantDocument, options);
      }
export function useSingleVariantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleVariantQuery, SingleVariantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleVariantQuery, SingleVariantQueryVariables>(SingleVariantDocument, options);
        }
export type SingleVariantQueryHookResult = ReturnType<typeof useSingleVariantQuery>;
export type SingleVariantLazyQueryHookResult = ReturnType<typeof useSingleVariantLazyQuery>;
export type SingleVariantQueryResult = Apollo.QueryResult<SingleVariantQuery, SingleVariantQueryVariables>;
export const UpdateVariantDocument = gql`
    mutation UpdateVariant($id: ID!, $updateVariantInput: UpdateVariantInput!) {
  updateVariant(id: $id, updateVariantInput: $updateVariantInput) {
    ...VariantParts
  }
}
    ${VariantPartsFragmentDoc}`;
export type UpdateVariantMutationFn = Apollo.MutationFunction<UpdateVariantMutation, UpdateVariantMutationVariables>;

/**
 * __useUpdateVariantMutation__
 *
 * To run a mutation, you first call `useUpdateVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVariantMutation, { data, loading, error }] = useUpdateVariantMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateVariantInput: // value for 'updateVariantInput'
 *   },
 * });
 */
export function useUpdateVariantMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVariantMutation, UpdateVariantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVariantMutation, UpdateVariantMutationVariables>(UpdateVariantDocument, options);
      }
export type UpdateVariantMutationHookResult = ReturnType<typeof useUpdateVariantMutation>;
export type UpdateVariantMutationResult = Apollo.MutationResult<UpdateVariantMutation>;
export type UpdateVariantMutationOptions = Apollo.BaseMutationOptions<UpdateVariantMutation, UpdateVariantMutationVariables>;