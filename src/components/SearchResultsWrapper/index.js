import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import ArtObjectCard from '../ArtObjectCard';
import SearchResultsByMedium from '../SearchResultsByMedium';
import SearchResultsByAlphabetical from '../SearchResultsByAlphabetical';
import { SEARCH_TABS } from '../../constants';

class SearchResultsWrapper extends Component {
  getActiveSearchType() {
    const {
      searchType,
    } = this.props || {};

    return searchType || '';
  }

  checkIfIsActive(key) {
    const searchTab = this.getActiveSearchType();

    return key === searchTab ? styles.active : '';
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
            <div className={`${styles.searchResultsHeader} col s12`}>
              { searchCategory &&
                <span className="left">
                  XXX Total Results for {searchCategory}
                </span>
              }
              { !searchCategory &&
                <span className="left">
                  XXX Total Results
                </span>
              }
              <ul className="tabs left">
                {
                  SEARCH_TABS.map((tab) => (
                    <li
                      className={`${styles.tab} tab left ${this.checkIfIsActive(tab.key)}`}
                      key={tab.key}
                    >
                      <a href={tab.key ? `/${searchCategory}/search-type/${tab.key}` : `/${searchCategory}`} data-key={tab.key}>{tab.content}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="col s12">
              {
                searchTab === '' &&
                <SearchResults {...props} />
              }
              {
                searchTab === 'medium' &&
                <SearchResultsByMedium {...props} />
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
