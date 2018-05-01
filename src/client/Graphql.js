import React from 'react';
import { render } from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, Query } from "react-apollo";
import fetch from 'node-fetch';
import gql from "graphql-tag";

import { getGlobalAppData } from '../helpers';

const getApolloClient = ({ uri }) => {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: uri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  // Fetch GraphQL data with plain JS
  client
    .query({
      query: gql`
        {
          objects(ids:[123,5]) {
            id
            title
            medium
            maker
            dimensions
            people
            creditline
          }
        }
      `
    })
    .then(({ data }) => console.log({ data }));

  return client;
};

// Fetch GraphQL data with a Query component
const ArtObjectQueryResult = () => (
  <Query
    query={gql`
      {
        objects(ids:[123,1,4]) {
          id
          title
          medium
          maker
          dimensions
          people
          creditline
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div>
          {
            data.objects.map(obj => (
              <div key={obj.id}>
                <ul>
                  <li>id: {obj.id}</li>
                  <li>title: {obj.title}</li>
                  <li>medium: {obj.medium}</li>
                  <li>maker: {obj.maker}</li>
                  <li>dimensions: {obj.dimensions}</li>
                  <li>people: {obj.people}</li>
                  <li>creditline: {obj.creditline}</li>
                </ul>
              </div>
            ))
          }
        </div>
      );
    }}
  </Query>
);

const GraphqLApp = () => {
  const globalAppData = getGlobalAppData();
  const client = getApolloClient({uri: globalAppData.GRAPHQL_URL});

  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <ArtObjectQueryResult />
      </div>
    </ApolloProvider>
  )
};

export default GraphqLApp;
