import React from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import GraphqlClient from '../../GraphqlClient';
import ArtObjectCard from '../ArtObjectCard';

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
        <div className="row">
          {
            data.objects.map(obj => (
              <div key={obj.id}>
                <ArtObjectCard {...obj} />
              </div>
            ))
          }
        </div>
      );
    }}
  </Query>
);


function ArtObjects() {
  const client = GraphqlClient();
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

  return (
    <div>
      <h1>Art Objects Page</h1>
      <ApolloProvider client={client}>
        <ArtObjectQueryResult />
      </ApolloProvider>
    </div>
  );
}

export default ArtObjects;
