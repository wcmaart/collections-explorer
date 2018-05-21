import React from 'react';
import { render } from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import { getGlobalAppData } from './helpers';

const getApolloClient = ({ uri }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: uri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  return client;
};

const GraphqlClient = () => {
  const globalAppData = getGlobalAppData();
  const client = getApolloClient({uri: globalAppData.GRAPHQL_URL});

  return client
};

export default GraphqlClient;
