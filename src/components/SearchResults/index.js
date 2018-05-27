import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import SearchPagination from '../SearchPagination';
import { Link } from 'react-router-dom';
import { SEARCH_TABS } from '../../constants';

// Fetch GraphQL data with a Query component
class SearchResults extends Component {
  constructor() {
    super();

    this.state = {
      searchTab: 'topResults',
    };
  }

  getActiveClass(id) {
    const searchTab = this.state.searchTab;

    return id === searchTab ? styles.active : '';
  }

  onTabClick(e) {
    const id = e.currentTarget.getAttribute('data-id');

    e.preventDefault();

    this.setState({searchTab: id})
  }

  render() {
    const objects = this.props.objects;
    const thisPageIdx = this.props.thisPageIdx;

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
                        className={`${styles.tab} tab left ${this.getActiveClass(tab.id)}`}
                        key={tab.id}
                      >
                        <a href="#" onClick={this.onTabClick.bind(this)} data-id={tab.id}>{tab.content}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className={`${styles.artObjects} row`}>
              { objects.length && objects.map(obj => (
                  <div key={obj.id} className={`col s12 l4`}>
                    <ArtObjectCard {...obj} />
                  </div>
                ))
              }
            </div>
          </div>
        }
        { !objects.length && <div>No results</div> }
        { thisPageIdx && <SearchPagination thisPageIdx={thisPageIdx} /> }
      </div>
    );
  }
}

export default SearchResults;
