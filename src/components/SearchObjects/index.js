import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import { ApolloProvider, Query } from "react-apollo";
import SearchResultsWrapper from '../SearchResultsWrapper';
import SearchGeneric from '../SearchGeneric';
import gqlQueries from '../../gqlQueries/objects';
import { SEARCH_OBJECTS_CONSTS as searchParams } from '../../constants';

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
