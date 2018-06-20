import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import ArtObjectCard from '../ArtObjectCard';
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
        {
          <ul className="tabs left">
            {
              SEARCH_TABS.map((tab) => {
                // for now, only show medium for objects
                if (tab.key === 'medium' && searchCategory !== 'objects') {
                  return null;
                }

                return (
                  <li
                    className={`${styles.tab} tab left ${this.checkIfIsActive(tab.key)}`}
                    key={tab.key}
                  >
                    <a href={tab.key ? `/${searchCategory}/search-type/${tab.key}` : `/${searchCategory}`} data-key={tab.key}>{tab.content}</a>
                  </li>
                );
              })
            }
          </ul>
        }
      </div>
    )
  }
}

export default SearchResultsHeader;
