import React, { Component } from 'react';
import Header from '../Header';
import SingleMakerView from '../SingleMakerView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/makers';
import { SEARCH_MAKERS_CONSTS as searchParams } from '../../constants';

// eslint-disable-next-line react/prefer-stateless-function
class SearchSingleMaker extends Component {
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
                getResultWrapper={params => {
                  // todo: improve this #apiMakerId
                  const newMergedProps = Object.assign({}, params.result, {
                    thingId: mergedProps.thingId,
                    title: mergedProps.thingId,
                  });

                  return <SingleMakerView {...newMergedProps} />;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSingleMaker;
