import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import QuerySingleResult from '../QuerySingleResult';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

class SingleGeneric extends Component {
  constructor() {
    super();

    this.state = {
      thingId: null,
      searchCategory: null,
    };
  }

  // check the route state both on mount and update
  componentDidMount() {
    this.getRouteState(this.props);
  }

  // check the route state both on mount and update
  componentWillReceiveProps(nextProps) {
    this.getRouteState(nextProps);
  }

  getRouteState(props) {
    // get values from the router
    const { match: { params } } = props;
    const thingId = params.id ? parseInt(params.id, 10) : null;
    // todo: this should be searchType not searchCategory
    const searchCategory = params.type || null;

    // protect against a bogus id
    if (isNaN(thingId)) {
      this.setState({
        routeError: 404
      });

      return;
    }

    this.setState({
      thingId,
      searchCategory,
    });
  }

  render() {
    const {
      routeError,
    } = this.state;

    const {
      searchInputPlaceholder,
    } = this.props;

    // catch any errors that might have been set in getRouteState
    if (routeError) {
      // todo: make a helper for this and move this logic
      return <Route
        render={({ staticContext }) => {
          // there is no `staticContext` on the client, so
          // we need to guard against that here
          if (staticContext) {
            staticContext.status = routeError;
          }

          return <div>{routeError}</div>;
          }
        }
      />;
    }

    const client = GraphqlClient();

    return (
      <ApolloProvider client={client}>
        <QuerySingleResult
          thingId={this.state.thingId}
          searchCategory={this.state.searchCategory}
          gqlQuery={this.props.gqlQuery}
          getResultWrapper={this.props.getResultWrapper}
        />
      </ApolloProvider>
    );
  }
}

export default withRouter(SingleGeneric);
