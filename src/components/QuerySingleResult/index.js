import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

class QuerySingleResult extends Component {
  render() {
    const {
      thingId,
      objectType,
      gqlQuery,
      getResultWrapper,
    } = this.props;

    // normalize mixed data
    const id = thingId || null;

    if (!id) {
      return null;
    }

    // todo: filter by objectType
    return <Query
      query={gqlQuery}
      variables={{ id }}
      // this is needed to catch errors instead of silently swallowing them
      errorPolicy="all"
    >
      {({ loading, error, data }) => {
        let searchResultItems = [];

        if (loading) {
          return (
            <div className="row">
              <span className="col s12 l4">
                Loading...
              </span>
            </div>
          );
        }

        if (!data) {
          return <p className="red-text">Oops! 😱 It looks like you need to setup your api</p>;
        }

        return getResultWrapper({
          result: data.object,
          objectType: objectType,
        });
      }}
    </Query>
  }
}

export default withRouter(QuerySingleResult);
