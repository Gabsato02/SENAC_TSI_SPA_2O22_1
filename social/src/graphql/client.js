import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://settled-martin-14.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      'C7Myr5jE59803Sj15RXbcRMZvJhVzN7nQhOmarIvcWkYALQFTj94kySDfGkeJohg',
  },
  cache: new InMemoryCache(),
});
