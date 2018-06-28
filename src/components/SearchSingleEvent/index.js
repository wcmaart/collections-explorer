import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import SingleEventView from '../SingleEventView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/events';
import { SEARCH_EVENTS_CONSTS as searchParams } from '../../constants';

class SearchSingleEvent extends Component {
  render() {
    const mergedProps = Object.assign({
        gqlQuery: gqlQueries.byId,
      },
      this.props,
      {gqlQueries},
      searchParams,
    );
    const props = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col s12">
              <SearchSingleGeneric
                {...mergedProps}
                getResultWrapper={(params) => {
                  return <SingleEventView {...params.result} />
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSingleEvent;
