import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocgxm51qn701xrffkh7x67/master',
  cache: new InMemoryCache()
});
