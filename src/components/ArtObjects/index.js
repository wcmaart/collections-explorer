import React from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import GraphqlClient from '../../GraphqlClient';
import ArtObjectCard from '../ArtObjectCard';

// todo: replace query, don't use sample ids
const gqlQuery = gql`
  {
    objects(ids:[4,10,14,19,35,123]) {
      id
      title
      medium
      dimensions
      people
      creditline
    }
  }
`;

// Fetch GraphQL data with a Query component
const ArtObjectQueryResult = () => (
  <Query query={gqlQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p className="red-text">Oops! 😱 It looks like you need to setup your api</p>;

      return (
        <div className={`${styles.artObjects} row`}>
          {
            data.objects.map(obj => (
              <div key={obj.id} className={`col s12 l4`}>
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
      query: gqlQuery,
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
