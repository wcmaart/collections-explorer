import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

class QuerySearchResults extends Component {
  render() {
    const {
      thingId,
      pageIdx,
      gqlQueries,
      getResultsWrapper,
    } = this.props;

    // normalize mixed data
    const id = thingId || null;
    const page = pageIdx || 0;

    // determine which gqlQuery to use
    const gqlQueryKey = id ? 'byId' : 'byPageIdx';
    // get the correct gqlQuery
    const gqlQuery = gqlQueries[gqlQueryKey];

    // todo: filter by searchCategory
    return <Query
      query={gqlQuery}
      variables={{ id, page }}
      // this is needed to catch errors instead of silently swallowing them
      errorPolicy="all"
    >
      {({ loading, error, data }) => {
        let searchResultItems = [];

        const {
         object,
         objects,
         maker,
         makers,
        } = data;

        const singleResult = object || maker;
        const manyResults = objects || makers;

        if (loading) {
          return (
            <div className="row">
              <span className="col s12 l4">
                Loading...
              </span>
            </div>
          );
        }

        if (singleResult) {
          searchResultItems = [singleResult];
        } else if (manyResults) {
          searchResultItems = manyResults;
        } else {
          return <p className="red-text">Oops! 😱 It looks like you need to setup your api</p>;
        }

        if (!searchResultItems.length) {
          return <p className="red-text">Sorry, no results</p>;
        }

        return getResultsWrapper({
          searchResultItems,
          thisPageIdx: page,
        });
      }}
    </Query>
  }
}

export default withRouter(QuerySearchResults);