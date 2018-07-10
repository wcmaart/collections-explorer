import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericPage from '../SearchGenericPage';
import gqlQueries from '../../gqlQueries/exhibitions';
import { SEARCH_EXHIBITIONS_CONSTS as searchParams } from '../../constants';

class SearchExhibitions extends Component {
  render() {
    const mergedProps = Object.assign(
      {
        searchCategory: 'exhibitions',
      },
      this.props,
      { gqlQueries },
      searchParams
    );

    return <SearchGenericPage {...mergedProps} />;
  }
}

export default SearchExhibitions;
