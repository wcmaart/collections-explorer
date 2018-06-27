import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericPage from '../SearchGenericPage';
import gqlQueries from '../../gqlQueries/mediums';
import { SEARCH_MEDIUMS_CONSTS as searchParams } from '../../constants';

class SearchMediums extends Component {
  render() {
    const mergedProps = Object.assign(
      {
        searchCategory: 'mediums',
      },
      this.props,
      {gqlQueries},
      searchParams,
    );

    return <SearchGenericPage {...mergedProps} />
  }
}

export default SearchMediums;
