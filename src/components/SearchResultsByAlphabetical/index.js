import React, { Component } from 'react';
import styles from './styles.scss';
import { ALPHABET } from '../../constants';
import { Link } from 'react-router-dom';

class SearchResultsByAlphabetical extends Component {
  render() {
    const testImg = this.props.imgUrl || `https://picsum.photos/500/500?random&${this.props.id}`;
    const objects = this.props.objects;
    const thisPageIdx = this.props.thisPageIdx;
    const dummyCounter = 16;

    return (
       <div className={`${styles.artObjects} row`}>
        { ALPHABET.map(letter => (
            <div key={letter} className={`${styles.section} col s12`}>
              <div className={styles.sectionInner}>
                <div className={styles.sectionInnerHeader}>
                  <h3 className={`${styles.h3} left`}>
                    {letter}
                  </h3>
                  <div className={styles.clearfix}></div>
                </div>
                <div className={`${styles.alphabeticalListings} row`}>
                  { Array(dummyCounter).fill(null).map((val, idx) => (
                      <div key={idx} className={`col s6 m3`}>
                        {letter} Dummy Name
                      </div>
                    ))
                  }
                </div>
              </div>
              <div>
                <h3 className={styles.h3}>
                </h3>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SearchResultsByAlphabetical;
