import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_ENDPOINT as string;

export const graphQLClient = new GraphQLClient(endpoint, {
  credentials: "include",
});
