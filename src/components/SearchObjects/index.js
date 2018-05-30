import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import { ApolloProvider, Query } from "react-apollo";
import { searchQuery,
  searchQueryByIds,
  searchQueryByPaginationIdx
} from '../../gql-queries/searchQueries';
import SearchResultsWrapper from '../SearchResultsWrapper';
import SearchGeneric from '../SearchGeneric';

const gqlQueries = {
  default: searchQuery,
  byIds: searchQueryByIds,
  byPaginationIdx: searchQueryByPaginationIdx,
};

class SearchObjects extends Component {
  render() {
    const temp = (args) => {
      return <SearchResultsWrapper {...args} />
    }

    return (
      <div>
        <Header />
        <div className="container">
          <SearchGeneric
            gqlQueries={gqlQueries}
            getResultsWrapper={temp}
          />
        </div>
      </div>
    );
  }
}

export default SearchObjects;
