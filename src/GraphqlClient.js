import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getGlobalAppData } from './helpers';

const getApolloClient = ({ uri, token }) => {
  // using node-fetch here fixes a problem with the native fetch and new ES syntax
  const httpLink = createHttpLink({
    uri,
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    const newHeaders = Object.assign(
      {
        authorization: token ? `Bearer ${token}` : '',
      },
      headers || {}
    );

    return {
      headers: newHeaders,
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return client;
};

const GraphqlClient = () => {
  const globalAppData = getGlobalAppData();
  const client = getApolloClient({
    uri: globalAppData.GRAPHQL_URL,
    token: globalAppData.GRAPHQL_TOKEN,
  });

  return client;
};

export default GraphqlClient;
