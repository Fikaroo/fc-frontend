import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { devtoolsExchange } from "@urql/devtools";
import { authExchange } from "@urql/exchange-auth";

const GraphqlEndpoint = process.env.GRAPHQL_ENDPOINT as string;

const makeClient = () => {
  return createClient({
    url: GraphqlEndpoint,
    exchanges: [
      cacheExchange,
      devtoolsExchange,
      authExchange(async (utils) => {
        return {
          addAuthToOperation(operation) {
            return operation;
          },
          didAuthError(error) {
            return error.graphQLErrors.some(
              (e) => e.extensions?.code === "UNAUTHENTICATED"
            );
          },
          async refreshAuth() {},
        };
      }),
      fetchExchange,
    ],
  });
};

export const { getClient } = registerUrql(makeClient);
