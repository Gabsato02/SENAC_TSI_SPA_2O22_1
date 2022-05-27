import { ApolloClient, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';

export const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://amusing-condor-63.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          'x-hasura-admin-secret':
            'Y8XA9Q36KI66VTdKfD4ByS51bXGeefdjyGM99ZNKD4I8c6NYD2YLFq2Kcii2ktUj',
        },
      },
    },
  }),
  cache: new InMemoryCache(),
});
