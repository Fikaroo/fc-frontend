import * as Types from '../types';

import * as Operations from '../operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useCheckAuthQuery(options?: Omit<Urql.UseQueryArgs<Operations.CheckAuthQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.CheckAuthQuery, Operations.CheckAuthQueryVariables>({ query: Operations.CheckAuthDocument, ...options });
};