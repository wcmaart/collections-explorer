import React from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import GraphqlClient from '../../GraphqlClient';
import PersonCard from '../PersonCard';

const fakePersonData = [{
  name: "Pablo Picasso",
  img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Pablo_picasso.jpg",
  born: "October 25, 1881, Málaga, Spain",
  died: "April 8, 1973, Mougins, France",
  onView: "Museum of Modern Art, Art Institute of Chicago, MORE",
  periods: "Cubism, Surrealism, Expressionism, Post-Impressionism, MORE",
},
{
  name: "Frida Kahlo",
  img: "https://pbs.twimg.com/media/CJQ8drkXAAApuJT.jpg",
  born: "July 6, 1907, Coyoacán, Mexico City, Mexico",
  died: "July 13, 1954, Coyoacán, Mexico City, Mexico",
  onView: "Museo Dolores Olmedo, Frida Kahlo Museum, MORE",
  periods: "Naïve art, Modern art, Surrealism, Magical Realism, Primitivism, Symbolism, Naturalism, Social realism, Cubism",
}];

// todo: replace query with real query
const gqlQuery = gql`
  {
    people(ids:[1]) {
      name
    }
  }
`;

// Fetch GraphQL data with a Query component
const PersonQueryResult = () => (
  <Query query={gqlQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      // temp fake data
      const persons = data.people || fakePersonData;

      return (
        <div className={`${styles.personsList} row`}>
          {
            persons.map(obj => (
              <div key={obj.id} className="col s12 l4">
                <PersonCard {...obj} />
              </div>
            ))
          }
        </div>
      );
    }}
  </Query>
);


function People() {
  const client = GraphqlClient();
  // Fetch GraphQL data with plain JS
  client
    .query({
      query: gqlQuery,
    })
    .then(({ data }) => console.log({ data }));

  return (
    <div>
      <h1>People Page</h1>
      <ApolloProvider client={client}>
        <PersonQueryResult />
      </ApolloProvider>
    </div>
  );
}

export default People;
