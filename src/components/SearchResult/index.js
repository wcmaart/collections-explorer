import React, { Component } from 'react';
import styles from './styles.scss';
import ArtObjectCard from '../ArtObjectCard';
import SearchPagination from '../SearchPagination';
import { Link } from 'react-router-dom';

// Fetch GraphQL data with a Query component
const SearchResult = ({objects, thisPageIdx}) => {
  if (objects.length <= 1) {
    return (
      <ArtObjectCard {...objects[0]} />
    )
  }

  return (
    <div>
      { objects.length &&
        <div>
          <div className={`${styles.searchResultsHeader} row`}>
            <span className="col s12 l4">
              XXX Total Results
            </span>
          </div>
          <div className={`${styles.artObjects} row`}>
            { objects.length && objects.map(obj => (
                <div key={obj.id} className={`col s12 l4`}>
                  <ArtObjectCard {...obj} />
                </div>
              ))
            }
          </div>
        </div>
      }
      { !objects.length && <div>No results</div> }
      { thisPageIdx && <SearchPagination thisPageIdx={thisPageIdx} /> }
    </div>
  );
}

export default SearchResult;
