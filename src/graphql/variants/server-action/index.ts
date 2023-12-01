"use server";

import {
  AllVariantsDocument,
  AllVariantsQuery,
  CreateVariantDocument,
  CreateVariantInput,
  CreateVariantMutation,
  CreateVariantMutationVariables,
  RemoveVariantDocument,
  RemoveVariantMutation,
  RemoveVariantMutationVariables,
  SingleUnitQuery,
  SingleUnitQueryVariables,
  SingleVariantDocument,
  UpdateVariantDocument,
  UpdateVariantInput,
  UpdateVariantMutation,
  UpdateVariantMutationVariables,
} from "@/graphql/generated/schema";
import { getClient } from "@/lib/client";

export const createVariant = async (createVariantInput: CreateVariantInput) =>
  await getClient().mutate<
    CreateVariantMutation,
    CreateVariantMutationVariables
  >({
    mutation: CreateVariantDocument,
    variables: { createVariantInput },
  });

export const allVariants = async () =>
  await getClient().query<AllVariantsQuery>({
    query: AllVariantsDocument,
  });

export const singleVariant = async (id: string) =>
  await getClient().query<SingleUnitQuery, SingleUnitQueryVariables>({
    query: SingleVariantDocument,
    variables: { id },
  });

export const updateVariant = async (
  id: string,
  updateVariantInput: UpdateVariantInput
) =>
  await getClient().mutate<
    UpdateVariantMutation,
    UpdateVariantMutationVariables
  >({
    mutation: UpdateVariantDocument,
    variables: { id, updateVariantInput },
  });

export const removeVariant = async (id: string) =>
  await getClient().mutate<
    RemoveVariantMutation,
    RemoveVariantMutationVariables
  >({
    mutation: RemoveVariantDocument,
    variables: { id },
  });
