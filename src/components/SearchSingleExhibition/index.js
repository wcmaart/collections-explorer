import React, { Component } from 'react';
import Header from '../Header';
import SingleExhibitionView from '../SingleExhibitionView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/exhibitions';
import { SEARCH_EXHIBITIONS_CONSTS as searchParams } from '../../constants';

// eslint-disable-next-line react/prefer-stateless-function
class SearchSingleExhibition extends Component {
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
                getResultWrapper={params => <SingleExhibitionView {...params.result} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSingleExhibition;
