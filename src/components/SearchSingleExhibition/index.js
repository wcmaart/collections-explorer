import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import SingleExhibitionView from '../SingleExhibitionView';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/exhibitions';
import { SEARCH_EXHIBITIONS_CONSTS as searchParams } from '../../constants';

class SearchSingleExhibition extends Component {
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
                  return <SingleExhibitionView {...params.result} />
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSingleExhibition;
