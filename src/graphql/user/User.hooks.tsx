import * as Types from '../../../types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useSingleUserQuery(options: Omit<Urql.UseQueryArgs<Operations.SingleUserQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SingleUserQuery, Operations.SingleUserQueryVariables>({ query: Operations.SingleUserDocument, ...options });
};