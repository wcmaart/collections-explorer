import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import ArtObjectCard from '../ArtObjectCard';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/objects';
import { SEARCH_OBJECTS_CONSTS as searchParams } from '../../constants';

class SearchSingleObject extends Component {
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
              return <ArtObjectCard {...params.result} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchSingleObject;
