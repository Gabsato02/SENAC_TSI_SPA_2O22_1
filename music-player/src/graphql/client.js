import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://amusing-condor-63.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'Y8XA9Q36KI66VTdKfD4ByS51bXGeefdjyGM99ZNKD4I8c6NYD2YLFq2Kcii2ktUj',
  },
  cache: new InMemoryCache(),
});
