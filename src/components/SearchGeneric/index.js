import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import QuerySearchResults from '../QuerySearchResults';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

class SearchGeneric extends Component {
  constructor() {
    super();

    this.state = {
      thingId: null,
      pageIdx: null,
      objectType: null,
    };

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  // check the route state both on mount and update
  componentDidMount() {
    this.getRouteState(this.props);
  }

  // check the route state both on mount and update
  componentWillReceiveProps(nextProps) {
    this.getRouteState(nextProps);
  }

  onSubmitSearch(e) {
    // quick and dirty for now
    e.preventDefault();
    const inputVal = e.target[0].value;

    // clear the input first
    e.target[0].value = '';

    this.props.history.push(`/objects/${inputVal}`);
  }

  getRouteState(props) {
    // get values from the router
    const { match: { params } } = props;
    const thingId = params.id ? parseInt(params.id, 10) : null;
    const pageIdx = params.page ? parseInt(params.page, 10) : null;
    const objectType = params.type || null;

    // protect against a bogus id
    if (isNaN(thingId)) {
      this.setState({
        routeError: 404
      });

      return;
    }

    this.setState({
      thingId,
      pageIdx,
      objectType,
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
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <div className="row">
            <div className="input-field col s12">
              <div className={styles.searchWrapper}>
                <input id="search" type="text" placeholder={searchInputPlaceholder} />
              </div>
            </div>
          </div>
        </form>

        <ApolloProvider client={client}>
          <QuerySearchResults
            thingId={this.state.thingId}
            pageIdx={this.state.pageIdx}
            objectType={this.state.objectType}
            gqlQueries={this.props.gqlQueries}
            getResultsWrapper={this.props.getResultsWrapper}
          />
        </ApolloProvider>
      </div>
    );
  }
}

export default withRouter(SearchGeneric);
