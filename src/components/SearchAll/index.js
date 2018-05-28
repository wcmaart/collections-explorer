import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import GraphqlClient from '../../GraphqlClient';
import SearchResultsWrapper from '../SearchResultsWrapper';
import { withRouter } from 'react-router';
import { Link, Route } from 'react-router-dom';

const getGqlQuery = ({ids, paginationIdx}) => {
  // todo consolidate fragments?
  var gqlstr;

  if (ids) {
    gqlstr = gql`
      query objects($ids: [ID!]) {
        objects(ids: $ids) {
          id
          title
          medium
          maker
          dimensions
          people
          creditline
        }
      }
    `;
  } else if (paginationIdx) {
    gqlstr = gql`
      query objects($paginationIdx: Int) {
        objects(paginationIdx: $paginationIdx) {
          id
          title
          medium
          maker
          dimensions
          people
          creditline
        }
      }
    `;
  } else {
    gqlstr = gql`
      {
        objects {
          id
          title
          medium
          maker
          dimensions
          people
          creditline
        }
      }
    `;
  }

  return gqlstr
}

// Fetch GraphQL data with a Query component
const ArtObjectQuery = ({artObjectId, paginationIdx, objectType}) => {
  const ids = artObjectId ? [artObjectId] : null;
  const query = getGqlQuery({ids, paginationIdx});

  // todo: clean up this quick pagination
  const thisPageIdx = artObjectId ? null : paginationIdx || 1;

  // todo: filter by objectType
  return <Query
    query={query}
    variables={{ ids, paginationIdx }}
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

      return <SearchResultsWrapper
        objects={data.objects}
        thisPageIdx={thisPageIdx}
        objectType={objectType}
      />
    }}
  </Query>
}


class SearchAll extends Component {
  constructor() {
    super();

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch(e) {
    // quick and dirty for now
    e.preventDefault();
    const inputVal = e.target[0].value;

    // clear the input first
    e.target[0].value = '';

    this.props.history.push(`/objects/${inputVal}`);
  }

  render() {
    const { match: { params } } = this.props;
    // get values from the router
    const artObjectId = params.id ? parseInt(params.id, 10) : null;
    const paginationIdx = params.page ? parseInt(params.page, 10) : null;
    const objectType = params.type || null;

    // todo: consolidate 404 code
    if (isNaN(artObjectId)) {
      return <Route
        render={({ staticContext }) => {
          // there is no `staticContext` on the client, so
          // we need to guard against that here
          if (staticContext) {
            staticContext.status = 404;
          }

          return <div>404</div>;
          }
        }
      />;
    }

    const client = GraphqlClient();

    // todo remove test
    // Test fetching GraphQL data with plain JS
    // client
    //   .query({
    //     query: getGqlQuery({
    //       artObjectId: artObjectId,
    //       paginationIdx: paginationIdx,
    //     }),
    //   })
    //   .then(({ data }) => console.log({ data }));

    return (
      <div>
        <Header />
        <div className="container">
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
            <ArtObjectQuery
              artObjectId={artObjectId}
              paginationIdx={paginationIdx}
              objectType={objectType}
            />
          </ApolloProvider>
        </div>
      </div>
    );
  }
}

export default SearchAll;
