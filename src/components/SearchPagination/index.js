import React, { Component } from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

// Fetch GraphQL data with a Query component
const SearchPagination = ({thisPageIdx}) => {
  const nextPageIdx = thisPageIdx && thisPageIdx + 1;
  const prevPageIdx = thisPageIdx && (thisPageIdx - 1 || null);

  return (
    <div className={styles.quickPagination}>
      <span>
        Pagination
      </span>
      <ul className="pagination">
        { prevPageIdx &&
          <li>
            <Link to={`/objects/page/${prevPageIdx}`}>
              <i className="material-icons">&larr;</i>
            </Link>
          </li>
        }
        <li className="waves-effect">
          <Link to={`/objects/page/${nextPageIdx}`}>
            <i className="material-icons">&rarr;</i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SearchPagination;
