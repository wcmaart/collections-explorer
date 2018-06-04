import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import ArtObjectCard from '../ArtObjectCard';
import SearchResultsByMedium from '../SearchResultsByMedium';
import SearchResultsByAlphabetical from '../SearchResultsByAlphabetical';
import { SEARCH_TABS } from '../../constants';

class SearchResultsWrapper extends Component {
  constructor() {
    super();

    this.state = {
      searchTab: 'topResults',
    };
  }

  getActiveClass(key) {
    const searchTab = this.state.searchTab;

    return key === searchTab ? styles.active : '';
  }

  onTabClick(e) {
    const key = e.currentTarget.getAttribute('data-key');

    e.preventDefault();

    this.setState({searchTab: key})
  }

  render() {
    const props = this.props;

    const {
      searchResultItems,
      thisPageIdx,
      objectType,
      slugPrefix,
    } = props;

    return (
      <div>
        { searchResultItems.length &&
          <div>
            <div className={`${styles.searchResultsHeader} row`}>
              { objectType &&
                <div className="col s12">
                  <span className="left">
                    XXX Total Results for {objectType}
                  </span>
                </div>
              }
              { !objectType &&
                <div className="col s12">
                  <span className="left">
                    XXX Total Results
                  </span>
                  <ul className="tabs left">
                    {
                      SEARCH_TABS.map((tab) => (
                        <li
                          className={`${styles.tab} tab left ${this.getActiveClass(tab.key)}`}
                          key={tab.key}
                        >
                          <a href="#" onClick={this.onTabClick.bind(this)} data-key={tab.key}>{tab.content}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              }
            </div>
            {
              this.state.searchTab === 'topResults' &&
              <SearchResults {...props} />
            }
            {
              this.state.searchTab === 'byMedium' &&
              <SearchResultsByMedium {...props} />
            }
            {
              this.state.searchTab === 'byAlphabetical' &&
              <SearchResultsByAlphabetical {...props} />
            }
          </div>
        }
        {
          // todo: figure out this proper logic
          thisPageIdx &&
          this.state.searchTab === 'topResults' &&
          <SearchPagination {...props} />
        }
      </div>
    );
  }
}

export default SearchResultsWrapper;
