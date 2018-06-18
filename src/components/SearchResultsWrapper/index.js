import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import ArtObjectCard from '../ArtObjectCard';
import SearchResultsHeader from '../SearchResultsHeader';
import SearchResultsByAlphabetical from '../SearchResultsByAlphabetical';

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
        { searchResultItems.length &&
          <div className="row">
            <div className="col s12">
              <SearchResultsHeader
                searchCategory={searchCategory}
                activeSearchType={this.getActiveSearchType()}
              />
            </div>
            <div className="col s12">
              {
                searchTab === '' &&
                <SearchResults {...props} />
              }
              {
                searchTab === 'alphabetical' &&
                <SearchResultsByAlphabetical {...props} />
              }
            </div>
          </div>
        }
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
