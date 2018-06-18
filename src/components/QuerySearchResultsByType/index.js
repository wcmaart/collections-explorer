import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';
import SearchResultsWrapper from '../SearchResultsWrapper';

class QuerySearchResultsByType extends Component {
  render() {
    const client = GraphqlClient();

    const {
      thingId,
      pageIdx,
      gqlQueries,
    } = this.props;

    // normalize mixed data
    const id = thingId || null;
    const page = pageIdx || 0;
    // determine which gqlQuery to use
    const gqlQueryKey = id ? 'byId' : 'byPageIdx';
    // get the correct gqlQuery
    const gqlQuery = gqlQueries[gqlQueryKey];

    client
      .query({
        query: gqlQuery,
      })
      .then(({ data }) => console.log({ data }));

    return (
      <div>
        <h1>test</h1>
        <ApolloProvider client={client}>
          {
            <h1>{this.props.id}</h1>
          }
        </ApolloProvider>
      </div>
    );
  }
}

export default withRouter(QuerySearchResultsByType);
