import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './styles.scss';
import QuerySearchResults from '../QuerySearchResults';
import QuerySearchResultsByType from '../QuerySearchResultsByType';
import { Link, Route } from 'react-router-dom';

class SearchGeneric extends Component {
  constructor() {
    super();

    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  onSubmitSearch(e) {
    // quick and dirty for now
    e.preventDefault();
    const inputVal = e.target[0].value;

    // clear the input first
    e.target[0].value = '';

    this.props.history.push(`${this.props.slugPrefix}/${inputVal}`);
  }

  render() {
    const {
      searchInputPlaceholder,
      searchType,
    } = this.props;

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

        { searchType ?
          <QuerySearchResultsByType {...this.props} /> :
          <QuerySearchResults {...this.props} />
        }
      </div>
    );
  }
}

export default withRouter(SearchGeneric);
