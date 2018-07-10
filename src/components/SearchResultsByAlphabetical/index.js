import React, { Component } from 'react';
import styles from './styles.scss';
import { ALPHABET } from '../../constants';
import { Link } from 'react-router-dom';

class SearchResultsByAlphabetical extends Component {
  render() {
    const { id, objects, searchCategory, thisPageIdx, searchResultItems } = this.props;

    return (
      <div className={`${styles.artObjects} row`}>
        {searchResultItems.map(letterData =>
          <div key={letterData.key} className={`${styles.section} col s12`}>
            <div className={styles.sectionInner}>
              <div className={styles.sectionInnerHeader}>
                <h3 className={`${styles.h3} left`}>
                  {letterData.content}
                </h3>
                <div className={styles.clearfix} />
              </div>
              <div className={`${styles.alphabeticalListings} row`}>
                {letterData.objects.map((obj, idx) =>
                  <div key={idx} className={`col s6 m3`}>
                    <Link
                      to={`/${searchCategory}/${obj.id}`}
                      className={`${styles.alphabeticalListing}`}
                    >
                      {obj.title}
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className={styles.h3} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchResultsByAlphabetical;
