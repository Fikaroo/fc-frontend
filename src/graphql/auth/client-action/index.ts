import { makeClient } from "@/lib/apollo-wrapper";
import {
  CheckAuthDocument,
  CheckAuthQuery,
  CheckAuthQueryVariables,
  LoginUserInput,
  LogoutDocument,
  LogoutMutation,
  RefleshDocument,
  RefleshMutation,
  SinginDocument,
  SinginMutation,
  SinginMutationVariables,
} from "../../generated/schema";

export async function loginClient(loginUserInput: LoginUserInput) {
  const result = await makeClient().mutate<
    SinginMutation,
    SinginMutationVariables
  >({
    mutation: SinginDocument,
    variables: {
      loginUserInput,
    },
  });

  return result;
}

export async function checkAuthClient() {
  return await makeClient().query<CheckAuthQuery, CheckAuthQueryVariables>({
    query: CheckAuthDocument,
  });
}

export async function refleshClient() {
  return await makeClient().mutate<RefleshMutation>({
    mutation: RefleshDocument,
  });
}

export async function logoutClient() {
  return await makeClient().mutate<LogoutMutation>({
    mutation: LogoutDocument,
  });
}
