import * as Types from '../../../types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useUpdateUserMutation() {
  return Urql.useMutation<Operations.UpdateUserMutation, Operations.UpdateUserMutationVariables>(Operations.UpdateUserDocument);
};