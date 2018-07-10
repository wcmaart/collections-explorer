import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericPage from '../SearchGenericPage';
import gqlQueries from '../../gqlQueries/events';
import { SEARCH_EVENTS_CONSTS as searchParams } from '../../constants';

class SearchEvents extends Component {
  render() {
    const mergedProps = Object.assign(
      {
        searchCategory: 'events',
      },
      this.props,
      { gqlQueries },
      searchParams
    );

    return <SearchGenericPage {...mergedProps} />;
  }
}

export default SearchEvents;
