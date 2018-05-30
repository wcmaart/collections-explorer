import React, { Component } from 'react';
import styles from './styles.scss';
import { ApolloProvider, Query } from "react-apollo";
import GraphqlClient from '../../GraphqlClient';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

class SearchGeneric extends Component {
  constructor() {
    super();

    this.state = {
      thingId: null,
      paginationIdx: null,
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

  queryAndRenderResults() {
    const {
      gqlQueries,
      getResultsWrapper,
    } = this.props;

    const {
      thingId,
      paginationIdx,
      objectType,
    } = this.state;

    // normalize mixed data
    const ids = thingId ? [thingId] : null;
    const thisPageIdx = thingId ? null : paginationIdx || 1;

    // determine which gqlQuery to use
    const gqlQueryKey = ids ? 'byIds' :
      thisPageIdx ? 'byPaginationIdx' :
      'default';

    // get the correct gqlQuery
    const gqlQuery = gqlQueries[gqlQueryKey];

    // todo: filter by objectType
    return <Query
      query={gqlQuery}
      variables={{ ids, paginationIdx }}
      // this is needed to catch errors instead of silently swallowing them
      errorPolicy="all"
    >
      {({ loading, error, data }) => {
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

        if (!data.objects) {
          return <p className="red-text">Sorry, no results</p>;
        }

        return getResultsWrapper({
          objects: data.objects,
          thisPageIdx: thisPageIdx,
          objectType: objectType,
        });
      }}
    </Query>
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
    const paginationIdx = params.page ? parseInt(params.page, 10) : null;
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
      paginationIdx,
      objectType,
    });
  }

  render() {
    const {
      routeError,
    } = this.state;

    // catch any errors that might have been set in getRouteState
    if (routeError) {
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
    const renderResults = this.queryAndRenderResults();

    return (
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <div className="row">
            <div className="input-field col s12">
              <div className={styles.searchWrapper}>
                <input id="search" type="text" placeholder="Search Entire Collection" />
              </div>
            </div>
          </div>
        </form>

        <ApolloProvider client={client}>
          {renderResults}
        </ApolloProvider>
      </div>
    );
  }
}

export default withRouter(SearchGeneric);
