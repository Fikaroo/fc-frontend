"use server";

import {
  AllUnitsDocument,
  AllUnitsQuery,
  CreateUnitDocument,
  CreateUnitInput,
  CreateUnitMutation,
  CreateUnitMutationVariables,
  RemoveUnitDocument,
  RemoveUnitMutation,
  RemoveUnitMutationVariables,
  SingleUnitQuery,
  SingleUnitQueryVariables,
  SingleUnitDocument,
  UpdateUnitDocument,
  UpdateUnitInput,
  UpdateUnitMutation,
  UpdateUnitMutationVariables,
} from "@/graphql/generated/schema";
import { getClient } from "@/lib/client";
import { revalidateTag } from "next/cache";

export const createUnit = async (createUnitInput: CreateUnitInput) => {
  const { data, errors } = await getClient().mutate<
    CreateUnitMutation,
    CreateUnitMutationVariables
  >({
    mutation: CreateUnitDocument,
    variables: { createUnitInput },
  });

  data && revalidateTag("create-unit");
  return { data, errors };
};

export const allUnits = async () =>
  await getClient().query<AllUnitsQuery>({
    query: AllUnitsDocument,
    context: {
      fetchOption: {
        next: {
          tags: ["create-unit", "update-unit", "remove-unit"],
        },
      },
    },
  });

export const singleUnit = async (id: string) =>
  await getClient().query<SingleUnitQuery, SingleUnitQueryVariables>({
    query: SingleUnitDocument,
    variables: { id },
  });

export const updateUnit = async (
  id: string,
  updateUnitInput: UpdateUnitInput
) => {
  const { data, errors } = await getClient().mutate<
    UpdateUnitMutation,
    UpdateUnitMutationVariables
  >({
    mutation: UpdateUnitDocument,
    variables: { id, updateUnitInput },
  });

  data && revalidateTag("update-unit");

  return { data, errors };
};

export const removeUnit = async (id: string) => {
  const { data, errors } = await getClient().mutate<
    RemoveUnitMutation,
    RemoveUnitMutationVariables
  >({
    mutation: RemoveUnitDocument,
    variables: { id },
  });
  data && revalidateTag("remove-unit");

  return { data, errors };
};
