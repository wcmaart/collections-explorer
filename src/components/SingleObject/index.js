import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../Header';
import ArtObjectCard from '../ArtObjectCard';
import SingleGeneric from '../SingleGeneric';
import gqlQueries from '../../gqlQueries/objects';
import { SEARCH_OBJECTS_CONSTS as searchParams } from '../../constants';

class SingleObject extends Component {
  render() {
    const gqlQuery = gqlQueries.byId;

    return (
      <div>
        <Header />
        <span>
        </span>
        <div className="container">
          <SingleGeneric
            {...searchParams}
            gqlQuery={gqlQuery}
            getResultWrapper={(params) => {
              const mergedParams = Object.assign({}, params.result, searchParams);

              return <ArtObjectCard {...mergedParams} />
            }}
          />
        </div>
      </div>
    );
  }
}

export default SingleObject;
