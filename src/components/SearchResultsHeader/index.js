import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import ArtObjectCard from '../ArtObjectCard';
import SearchResultsByMedium from '../SearchResultsByMedium';
import SearchResultsByAlphabetical from '../SearchResultsByAlphabetical';
import { SEARCH_TABS } from '../../constants';

class SearchResultsHeader extends Component {
  checkIfIsActive(key) {
    const searchTab = this.props.activeSearchType;

    return key === searchTab ? styles.active : '';
  }

  render() {
    const {
      searchCategory,
    } = this.props;

    return (
      <div className={styles.searchResultsHeader}>
        { searchCategory &&
          <span className="left">
            Results for {searchCategory}
          </span>
        }
        { !searchCategory &&
          <span className="left">
            Results
          </span>
        }
        {/* for now, only show for objects */}
        {
          searchCategory === 'objects' &&
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
        }
      </div>
    )
  }
}

export default SearchResultsHeader;
