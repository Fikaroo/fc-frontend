import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { cookies } from "next/headers";
import { onError } from "@apollo/client/link/error";

const endpoint = process.env.GRAPHQL_ENDPOINT as string;

const authMiddleware = new ApolloLink((operations, forward) => {
  operations.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      cookie: cookies().toString(),
    },
  }));

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
            // Modify the operation context with a new token

            // operation.setContext({
            //   headers: {
            //     ...oldHeaders,
            //     authorization: getNewToken(),
            //   },
            // });
            // Retry the request, returning the new observable
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

const link = new HttpLink({
  uri: endpoint,
  fetchOptions: {
    credentials: "include",
  },
});

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    defaultOptions: {
      query: { errorPolicy: "all" },
      mutate: { errorPolicy: "all" },
    },
    cache: new NextSSRInMemoryCache(),
    link: ApolloLink.from([errorLink, authMiddleware, link]),
  });
});
