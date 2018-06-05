import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericPage from '../SearchGenericPage';
import gqlQueries from '../../gqlQueries/objects';
import { SEARCH_OBJECTS_CONSTS as searchParams } from '../../constants';

class SearchObjects extends Component {
  render() {
    const mergedProps = Object.assign(
      {
        searchCategory: 'objects',
      },
      this.props,
      {gqlQueries},
      searchParams,
    );

    return <SearchGenericPage {...mergedProps} />
  }
}

export default SearchObjects;
