"use client";

import { logoutClient, refleshClient } from "@/graphql/auth/client-action";
import { ApolloLink, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const endpoint = process.env.GRAPHQL_ENDPOINT as string;

const authMiddleware = new ApolloLink((operations, forward) => {
  return forward(operations);
});

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions.code) {
          // Apollo Server sets code to UNAUTHENTICATED
          // when an AuthenticationError is thrown in a resolver
          case "UNAUTHENTICATED":
            return forward(operation);
        }
      }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  }
);

export function makeClient() {
  const httpLink = new HttpLink({
    uri: endpoint,
    fetchOptions: {
      credentials: "include",
    },
  });

  return new NextSSRApolloClient({
    defaultOptions: {
      query: { errorPolicy: "all" },
      mutate: { errorPolicy: "all" },
    },
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            errorLink,
            authMiddleware,
            httpLink,
          ])
        : ApolloLink.from([errorLink, authMiddleware, httpLink]),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
