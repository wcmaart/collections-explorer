import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import SingleMakerView from '../SingleMakerView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/makers';
import { SEARCH_MAKERS_CONSTS as searchParams } from '../../constants';

class SearchSingleMaker extends Component {
  render() {
    const mergedProps = Object.assign({
        gqlQuery: gqlQueries.byId,
      },
      this.props,
      {gqlQueries},
      searchParams,
    );

    return (
      <div>
        <Header />
        <div className="container">
          <SearchSingleGeneric
            {...mergedProps}
            getResultWrapper={(params) => {
              // todo: improve this #apiMakerId
              const newMergedProps = Object.assign({}, params.result, {
                thingId: mergedProps.thingId,
                title: mergedProps.thingId,
              });

              return <SingleMakerView {...newMergedProps} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchSingleMaker;
