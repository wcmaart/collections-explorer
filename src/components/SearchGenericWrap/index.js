import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import SearchResultsWrapper from '../SearchResultsWrapper';
import SearchGeneric from '../SearchGeneric';

class SearchGenericWrap extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchGeneric
            {...this.props}
            getResultsWrapper={(params) => {
              const mergedParams = Object.assign({}, this.props, params);
              return <SearchResultsWrapper {...mergedParams} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchGenericWrap;
