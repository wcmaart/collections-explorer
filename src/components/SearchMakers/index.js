import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericWrap from '../SearchGenericWrap';
import gqlQueries from '../../gqlQueries/makers';
import { SEARCH_MAKERS_CONSTS as searchParams } from '../../constants';

class SearchMakers extends Component {
  render() {
    const mergedProps = Object.assign({}, this.props, {gqlQueries}, searchParams);
    return <SearchGenericWrap {...mergedProps} />
  }
}

export default SearchMakers;
