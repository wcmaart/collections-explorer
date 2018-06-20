import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import ArtObjectCard from '../ArtObjectCard';

class SearchResultsWrapper extends Component {
  // todo: dedup #dedupGetActiveSearchType
  getActiveSearchType() {
    const {
      searchType,
    } = this.props || {};

    return searchType || '';
  }

  render() {
    const props = this.props;

    const {
      searchResultItems,
      thisPageIdx,
      searchCategory,
      slugPrefix,
    } = props;

    const searchTab = this.getActiveSearchType();
    const hasPageIdx = thisPageIdx || thisPageIdx === 0;

    return (
      <div>
        <SearchResults {...props} />
        {
          // todo: figure out this proper logic
          hasPageIdx &&
          searchTab === '' &&
          <SearchPagination {...props} />
        }
      </div>
    );
  }
}

export default SearchResultsWrapper;
