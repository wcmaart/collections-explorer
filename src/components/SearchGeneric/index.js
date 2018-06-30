import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './styles.scss';
import SearchResultsHeader from '../SearchResultsHeader';
import QuerySearchResults from '../QuerySearchResults';
import QuerySearchResultsByType from '../QuerySearchResultsByType';
import { Link, Route } from 'react-router-dom';

class SearchGeneric extends Component {
  constructor() {
    super();

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  // todo: dedup #dedupGetActiveSearchType
  getActiveSearchType() {
    const {
      searchType,
    } = this.props || {};

    return searchType || '';
  }

  onSubmitSearch(e) {
    // quick and dirty for now
    e.preventDefault();

    const inputVal = e.target[0].value;

    const {
      searchCategory,
    } = this.props;

    // todo: unify urls once we unify the apis. e.g. see todo #apiMakerId
    const shouldSearchByTitle = searchCategory === 'objects' ||
    searchCategory === 'events';

    const newSlug = shouldSearchByTitle ?
      `${this.props.slugPrefix}/search-type/title/${inputVal}` :
      `${this.props.slugPrefix}/${inputVal}`;

    // clear the input first
    e.target[0].value = '';

    this.props.history.push(newSlug);
  }

  render() {
    const {
      searchInputPlaceholder,
      searchCategory,
    } = this.props;

    const searchType = this.getActiveSearchType();

    // todo: simplify syntax of props below
    return (
      <div>
        <form onSubmit={this.onSubmitSearch}>
          <div className="row">
            <div className="input-field col s12">
              <div className={styles.searchWrapper}>
                <input id="search" type="text" placeholder={searchInputPlaceholder} />
              </div>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col s12">
            <SearchResultsHeader
              searchCategory={searchCategory}
              activeSearchType={searchType}
            />
          </div>
          <div className="col s12">
            { searchType ?
              <QuerySearchResultsByType {...this.props} /> :
              <QuerySearchResults {...this.props} />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchGeneric);
