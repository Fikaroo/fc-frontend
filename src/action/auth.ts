"use server";

import { cookies } from "next/headers";

import { LoginUserInput, SinginDocument } from "@/graphql/generate/graphql";
import { graphQLClient } from "@/lib/client";

export const login = async (loginUserInput: LoginUserInput) => {
  const result = await graphQLClient.request(SinginDocument, {
    loginUserInput,
  });
  if (result) {
    const accessToken = result?.singin?.access_token;
    const refleshToken = result?.singin?.reflesh_token;
  }

  console.log(result);
};
