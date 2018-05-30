import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import { ApolloProvider, Query } from "react-apollo";
import gqlQueries from '../../gqlQueries/objects';
import SearchResultsWrapper from '../SearchResultsWrapper';
import SearchGeneric from '../SearchGeneric';

const searchParams = {
  searchInputPlaceholder: 'Search Entire Collection',
  slugPrefix: '/objects',
};

class SearchObjects extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchGeneric
            {...searchParams}
            gqlQueries={gqlQueries}
            getResultsWrapper={(params) => {
              const mergedParams = Object.assign({}, params, searchParams);
              return <SearchResultsWrapper {...mergedParams} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchObjects;