import React, { Component } from 'react';
import styles from './styles.scss';
import { Link } from 'react-router-dom';

// Fetch GraphQL data with a Query component
const SearchPagination = ({ thisPageIdx, slugPrefix }) => {
  const hasPageIdx = thisPageIdx || thisPageIdx === 0;
  const nextPageIdx = hasPageIdx && thisPageIdx + 1;
  const prevPageIdx = hasPageIdx && thisPageIdx - 1;
  const hasPrevPageIdx = prevPageIdx >= 0;

  return (
    <div className={styles.quickPagination}>
      <span className={styles.paginationTitle}>Pagination</span>
      <ul className="pagination">
        {hasPrevPageIdx &&
          <li>
            <Link to={`${slugPrefix}/page/${prevPageIdx}`}>
              <i className="material-icons">&larr;</i>
            </Link>
          </li>}
        <li className="waves-effect">
          <Link to={`${slugPrefix}/page/${nextPageIdx}`}>
            <i className="material-icons">&rarr;</i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SearchPagination;
