import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
// todo -- use maker instead
import ArtObjectCard from '../ArtObjectCard';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/makers';
import { SEARCH_MAKERS_CONSTS as searchParams } from '../../constants';

class SearchSingleMaker extends Component {
  render() {

    const mergedProps = Object.assign({
        gqlQuery: gqlQueries.byId,
      },
      this.props,
      {gqlQueries},
      searchParams,
    );

    return (
      <div>
        <Header />
        <span>
        </span>
        <div className="container">
          <SearchSingleGeneric
            {...mergedProps}
            getResultWrapper={(params) => {
              return <ArtObjectCard {...params.result} isSingleCard={true} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchSingleMaker;
