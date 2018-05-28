import React, { Component } from 'react';
import styles from './styles.scss';
import SearchPagination from '../SearchPagination';
import SearchResults from '../SearchResults';
import SearchResultsByType from '../SearchResultsByType';
import { Link } from 'react-router-dom';
import { SEARCH_TABS } from '../../constants';

// Fetch GraphQL data with a Query component
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
    const objects = props.objects;
    const thisPageIdx = props.thisPageIdx;

    if (objects.length <= 1) {
      return (
        <ArtObjectCard {...objects[0]} />
      )
    }

    return (
      <div>
        { objects.length &&
          <div>
            <div className={`${styles.searchResultsHeader} row`}>
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
            </div>
            {
              this.state.searchTab === 'topResults' &&
              <SearchResults {...props} />
            }
            {
              this.state.searchTab === 'byType' &&
              <SearchResultsByType {...props} />
            }
          </div>
        }
        { !objects.length && <div>No results</div> }
        { thisPageIdx && <SearchPagination thisPageIdx={thisPageIdx} /> }
      </div>
    );
  }
}

export default SearchResultsWrapper;
