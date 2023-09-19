"use client";

import { useMemo } from "react";
import {
  UrqlProvider,
  ssrExchange,
  cacheExchange,
  fetchExchange,
  createClient,
} from "@urql/next";
import { devtoolsExchange } from "@urql/devtools";
import { authExchange } from "@urql/exchange-auth";
import { LogoutDocument, RefleshDocument } from "@/graphql/operations";

const GraphqlEndpoint = process.env.GRAPHQL_ENDPOINT as string;

export default function UrqlWrapper({ children }: React.PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: GraphqlEndpoint,
      exchanges: [
        cacheExchange,
        ssr,
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
              const { data, error } = await utils.mutate(RefleshDocument, {});

              // if (error) {
              //   utils.mutate(LogoutDocument, {});
              // }
            },
          };
        }),
        fetchExchange,
      ],
      suspense: true,
      fetchOptions: {
        credentials: "include",
      },
    });

    return [client, ssr];
  }, []);
  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
