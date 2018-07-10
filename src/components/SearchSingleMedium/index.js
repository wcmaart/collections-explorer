import React, { Component } from 'react';
import Header from '../Header';
import SingleMediumView from '../SingleMediumView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/mediums';
import { SEARCH_MEDIUMS_CONSTS as searchParams } from '../../constants';

// eslint-disable-next-line react/prefer-stateless-function
class SearchSingleMedium extends Component {
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
                  // todo: improve this #apiMediumId
                  const newMergedProps = Object.assign({}, params.result, {
                    thingId: mergedProps.thingId,
                    title: mergedProps.thingId,
                  });

                  return <SingleMediumView {...newMergedProps} />;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSingleMedium;
