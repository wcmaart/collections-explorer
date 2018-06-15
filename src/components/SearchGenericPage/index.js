import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import SearchResultsWrapper from '../SearchResultsWrapper';
import SearchGeneric from '../SearchGeneric';

class SearchGenericPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchGeneric {...this.props} />
        </div>
      </div>
    );
  }
}

export default SearchGenericPage;
