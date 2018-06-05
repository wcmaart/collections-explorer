import React, { Component } from 'react';
import styles from './styles.scss';
import SearchGenericWrap from '../SearchGenericWrap';
import gqlQueries from '../../gqlQueries/objects';
import { SEARCH_OBJECTS_CONSTS as searchParams } from '../../constants';

class SearchObjects extends Component {
  render() {
    const mergedProps = Object.assign({}, this.props, {gqlQueries}, searchParams);
    return <SearchGenericWrap {...mergedProps} />
  }
}

export default SearchObjects;
