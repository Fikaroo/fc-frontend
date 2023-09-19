import { getClient } from "@/lib/client";
import { LoginUserInput } from "../graphql/types";
import {
  CheckAuthDocument,
  CheckAuthQuery,
  CheckAuthQueryVariables,
  SinginDocument,
  SinginMutation,
  SinginMutationVariables,
} from "../graphql/operations";

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

export async function login(loginUserInput: LoginUserInput) {
  const result = await getClient().mutation<
    SinginMutation,
    SinginMutationVariables
  >(SinginDocument, {
    loginUserInput,
  });
  return result;
}

export async function checkAuth() {
  return await getClient().query<CheckAuthQuery, CheckAuthQueryVariables>(
    CheckAuthDocument,
    {}
  );
}

// export async function reflesh(): Promise<IResponse<RefleshMutation>> {
//   const { data, errors } = await getClient().mutate({
//     mutation: RefleshDocument,
//   });

//   return { data, errors };
// }

// export async function logout(): Promise<IResponse<LogoutMutation>> {
//   const { data, errors } = await getClient().mutate({
//     mutation: LogoutDocument,
//   });

//   return { data, errors };
// }
