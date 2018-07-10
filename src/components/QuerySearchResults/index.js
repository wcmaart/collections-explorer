import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from 'react-apollo';
import GraphqlClient from '../../GraphqlClient';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';
import SearchResultsWrapper from '../SearchResultsWrapper';
import { getNormalizedDataResponse } from '../../helpers';

class QuerySearchResults extends Component {
  render() {
    const client = GraphqlClient();

    const { thingId, pageIdx, gqlQueries } = this.props;

    // normalize mixed data
    const id = thingId || null;
    const page = pageIdx || 0;
    // determine which gqlQuery to use
    const gqlQueryKey = id ? 'byId' : 'byPageIdx';
    // get the correct gqlQuery
    const gqlQuery = gqlQueries[gqlQueryKey];

    return (
      <ApolloProvider client={client}>
        <Query
          query={gqlQuery}
          variables={{ id, page }}
          // this is needed to catch errors instead of silently swallowing them
          errorPolicy="all"
        >
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <div className="row">
                  <span className="col s12 l4">Loading...</span>
                </div>
              );
            }

            const searchResultItems = getNormalizedDataResponse(data);

            if (!searchResultItems.length) {
              return <p className="red-text">Sorry, no results</p>;
            }

            const mergedParams = Object.assign({}, this.props, {
              searchResultItems,
              thisPageIdx: page,
            });

            return <SearchResultsWrapper {...mergedParams} />;
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

export default withRouter(QuerySearchResults);
