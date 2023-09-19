import * as Types from '../types';

import * as Operations from '../operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useRefleshMutation() {
  return Urql.useMutation<Operations.RefleshMutation, Operations.RefleshMutationVariables>(Operations.RefleshDocument);
};