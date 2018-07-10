import React, { Component } from 'react';
import Header from '../Header';
import SingleEventView from '../SingleEventView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/events';
import { SEARCH_EVENTS_CONSTS as searchParams } from '../../constants';

// eslint-disable-next-line react/prefer-stateless-function
class SearchSingleEvent extends Component {
  render() {
    const mergedProps = Object.assign(
      {
        gqlQuery: gqlQueries.byId,
      },
      this.props,
      { gqlQueries },
      searchParams
    );

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col s12">
              <SearchSingleGeneric
                {...mergedProps}
                getResultWrapper={params => <SingleEventView {...params.result} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSingleEvent;
