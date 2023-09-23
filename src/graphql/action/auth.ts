"use server";

import { getClient } from "@/lib/client";
import {
  CheckAuthDocument,
  CheckAuthQuery,
  CheckAuthQueryVariables,
  LogoutDocument,
  RefleshDocument,
  RefleshMutation,
} from "@/graphql/generated/schema";

// export async function signup(
//   createUserInput: CreateUserInput
// ): Promise<IResponse<SignupMutation>> {
//   const { data, errors } = await getClient().mutate({
//     mutation: SignupDocument,
//     variables: {
//       createUserInput,
//     },
//   });

//   return { data, errors };
// }

export async function checkAuth() {
  return await getClient().query<CheckAuthQuery, CheckAuthQueryVariables>({
    query: CheckAuthDocument,
  });
}

export async function reflesh() {
  return await getClient().mutate<RefleshMutation>({
    mutation: RefleshDocument,
  });
}

export async function logout() {
  return await getClient().mutate({
    mutation: LogoutDocument,
  });
}
