import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styles from './styles.scss';
import Header from '../Header';
import ArtObjectCard from '../ArtObjectCard';
import SearchSingleGeneric from '../SearchSingleGeneric';
import gqlQueries from '../../gqlQueries/objects';
import { SEARCH_OBJECTS_CONSTS as searchParams } from '../../constants';

class SearchSingleObject extends Component {
  constructor() {
    super(...arguments);

    this.goBack = this.goBack.bind(this);
  }

  // Todo #consolidateGoback functions and style
  goBack (props) {
    this.props.history.goBack();
  }

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
        <span>
        </span>
        <div className="container">
          <button onClick={this.goBack.bind(this)} className={`${styles.goBack} btn-flat`}>
            Go Back
          </button>

          <SearchSingleGeneric
            {...mergedProps}
            getResultWrapper={(params) => {
              return <ArtObjectCard {...params.result} isSingleCard={true} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(SearchSingleObject);
