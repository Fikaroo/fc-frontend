"use server";

import {
  RemoveUserDocument,
  RemoveUserMutation,
  RemoveUserMutationVariables,
  UpdateUserDocument,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from "@/graphql/generated/schema";
import { getClient } from "@/lib/client";

export const updateUser = async (
  id: string,
  updateUserInput: UpdateUserInput
) => {
  return await getClient().mutate<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >({
    mutation: UpdateUserDocument,
    variables: {
      id,
      updateUserInput: updateUserInput,
    },
  });
};

export const removeUser = async (id: string) => {
  return await getClient().mutate<
    RemoveUserMutation,
    RemoveUserMutationVariables
  >({
    mutation: RemoveUserDocument,
    variables: { id },
  });
};
