import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";
import { devtoolsExchange } from "@urql/devtools";
import { authExchange } from "@urql/exchange-auth";
import { LogoutDocument, RefleshDocument } from "@/graphql/operations";

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
            return utils.appendHeaders(operation, {});
          },
          didAuthError(error) {
            return error.graphQLErrors.some(
              (e) => e.extensions?.code === "UNAUTHENTICATED"
            );
          },
          async refreshAuth() {
            // const { data, error } = await utils.mutate(RefleshDocument, {});
            // console.log(data, error);
            // if (error) {
            //   const { data, error } = await utils.mutate(LogoutDocument, {});
            //   console.log(data, error);
            // }
          },
        };
      }),
      fetchExchange,
    ],

    fetchOptions: {
      credentials: "include",
    },
  });
};

export const { getClient } = registerUrql(makeClient);
