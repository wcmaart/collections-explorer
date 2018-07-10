import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericPage from '../SearchGenericPage';
import gqlQueries from '../../gqlQueries/makers';
import { SEARCH_MAKERS_CONSTS as searchParams } from '../../constants';

class SearchMakers extends Component {
  render() {
    const mergedProps = Object.assign(
      {
        searchCategory: 'makers',
      },
      this.props,
      { gqlQueries },
      searchParams
    );

    return <SearchGenericPage {...mergedProps} />;
  }
}

export default SearchMakers;
