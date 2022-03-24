import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://settled-martin-14.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'C7Myr5jE59803Sj15RXbcRMZvJhVzN7nQhOmarIvcWkYALQFTj94kySDfGkeJohg'
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,document.querySelector('#root')
);